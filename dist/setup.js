"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const buffer_1 = require("buffer");
const btoa = (value) => buffer_1.Buffer.from(value, "binary").toString("base64");
const getAuthorizationCode = async (headers) => {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    const request = new Request("https://discord.com/api/oauth2/token", {
        method: "POST",
        body: new URLSearchParams({
            grant_type: "client_credentials",
            scope: "applications.commands.update",
        }).toString(),
        headers: headers,
    });
    const response = await fetch(request);
    if (!response.ok)
        throw new Error("Failed to request an Authorization code.");
    try {
        const data = await response.json();
        return data.access_token;
    }
    catch {
        throw new Error("Failed to parse the Authorization code response.");
    }
};
const resolveCommandsEndpoint = (applicationId, guildId) => {
    const url = `https://discord.com/api/v8/applications/${applicationId}`;
    if (guildId) {
        return `${url}/guilds/${guildId}/commands`;
    }
    return `${url}/commands`;
};
const deleteExistingCommands = async (applicationId, bearer, guildId) => {
    const url = resolveCommandsEndpoint(applicationId, guildId);
    const request = new Request(url, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${bearer}` },
    });
    const response = await fetch(request);
    const commands = await response.json();
    await Promise.all(commands.map((command) => {
        return fetch(`${url}/${command.id}`, {
            method: "DELETE",
            headers: { Authorizaton: `Bearer ${bearer}` }
        });
    }));
};
const createCommands = async ({ applicationId, guildId, commands, }, bearer) => {
    const url = resolveCommandsEndpoint(applicationId, guildId);
    const promises = commands.map(async ([command, handler]) => {
        const request = new Request(url, {
            method: "POST",
            body: JSON.stringify(command),
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${bearer}` },
        });
        const error = new Error(`Setting command ${command.name} failed!`);
        try {
            const response = await fetch(request);
            if (!response.ok)
                throw error;
            return response;
        }
        catch (e) {
            throw error;
        }
    });
    return await Promise.all(promises)
        .then(() => new Response("OK"))
        .catch((e) => new Response(e.message, { status: 502 }));
};
const setup = ({ applicationId, applicationSecret, guildId, commands, }) => {
    const authorization = btoa(unescape(encodeURIComponent(applicationId + ':' + applicationSecret)));
    const headers = {
        Authorization: `Basic ${authorization}`
    };
    return async () => {
        try {
            const bearer = await getAuthorizationCode(headers);
            await deleteExistingCommands(applicationId, bearer);
            return await createCommands({ applicationId, guildId, commands }, bearer);
        }
        catch {
            return new Response(JSON.stringify({ error: "Failed to authenticate with Discord. Are the Application ID and secret set correctly?" }), { status: 407, headers: { "Content-Type": "application/json" } });
        }
    };
};
exports.setup = setup;
//# sourceMappingURL=setup.js.map