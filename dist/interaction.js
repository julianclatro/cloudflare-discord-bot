"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.interaction = void 0;
const tweetnacl_1 = __importDefault(require("tweetnacl"));
const buffer_1 = require("buffer");
const types_1 = require("./types");
const makeValidator = ({ publicKey }) => async (request) => {
    const headers = Object.fromEntries(request.headers);
    const signature = String(headers["x-signature-ed25519"]);
    const timestamp = String(headers["x-signature-timestamp"]);
    const body = await request.json();
    const isValid = tweetnacl_1.default.sign.detached.verify(buffer_1.Buffer.from(timestamp + JSON.stringify(body)), buffer_1.Buffer.from(signature, "hex"), buffer_1.Buffer.from(publicKey, "hex"));
    if (!isValid)
        throw new Error("Invalid request");
};
const jsonResponse = (data) => new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
});
const DEFAULT_COMMAND = {
    name: "",
    description: "",
};
const DEFAULT_HANDLER = () => ({
    type: types_1.InteractionResponseType.Pong,
});
const interaction = ({ publicKey, commands, }) => {
    return async (request) => {
        const validateRequest = makeValidator({ publicKey });
        try {
            await validateRequest(request.clone());
            try {
                const interaction = (await request.json());
                if (interaction.type == types_1.InteractionType.Ping) {
                    return jsonResponse({ type: 1 });
                }
                else if (interaction.type == types_1.InteractionType.ApplicationCommand) {
                    const [command, handler] = commands.find(([command, handler]) => command.name === interaction.data?.name) || [DEFAULT_COMMAND, DEFAULT_HANDLER];
                    return jsonResponse(await handler(interaction));
                }
            }
            catch (e) {
                console.log(e.message);
                return new Response(null, { status: 400 });
            }
        }
        catch (e) {
            console.error(e.message);
            return new Response(null, { status: 401 });
        }
        return new Response(null, { status: 500 });
    };
};
exports.interaction = interaction;
//# sourceMappingURL=interaction.js.map