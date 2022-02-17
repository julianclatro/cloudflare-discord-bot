"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const authorize = (applicationId, permissions) => async () => {
    const urlSearchParams = new URLSearchParams({
        client_id: applicationId,
        scope: "bot applications.commands",
        permissions: permissions.compute()
    });
    const redirectURL = new URL(`https://discord.com/oauth2/authorize`);
    redirectURL.search = urlSearchParams.toString();
    return new Response(null, {
        status: 301,
        headers: { Location: redirectURL.toString() },
    });
};
exports.authorize = authorize;
//# sourceMappingURL=authorize.js.map