"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedType = exports.AllowedMentionTypes = exports.InteractionResponseType = exports.InteractionType = exports.PermissionType = exports.ApplicationCommandType = exports.ApplicationCommandOptionType = void 0;
var ApplicationCommandOptionType;
(function (ApplicationCommandOptionType) {
    ApplicationCommandOptionType[ApplicationCommandOptionType["SUB_COMMAND"] = 1] = "SUB_COMMAND";
    ApplicationCommandOptionType[ApplicationCommandOptionType["SUB_COMMAND_GROUP"] = 2] = "SUB_COMMAND_GROUP";
    ApplicationCommandOptionType[ApplicationCommandOptionType["STRING"] = 3] = "STRING";
    ApplicationCommandOptionType[ApplicationCommandOptionType["INTEGER"] = 4] = "INTEGER";
    ApplicationCommandOptionType[ApplicationCommandOptionType["BOOLEAN"] = 5] = "BOOLEAN";
    ApplicationCommandOptionType[ApplicationCommandOptionType["USER"] = 6] = "USER";
    ApplicationCommandOptionType[ApplicationCommandOptionType["CHANNEL"] = 7] = "CHANNEL";
    ApplicationCommandOptionType[ApplicationCommandOptionType["ROLE"] = 8] = "ROLE";
    ApplicationCommandOptionType[ApplicationCommandOptionType["MENTIONABLE"] = 9] = "MENTIONABLE";
    ApplicationCommandOptionType[ApplicationCommandOptionType["NUMBER"] = 10] = "NUMBER";
})(ApplicationCommandOptionType = exports.ApplicationCommandOptionType || (exports.ApplicationCommandOptionType = {}));
var ApplicationCommandType;
(function (ApplicationCommandType) {
    ApplicationCommandType[ApplicationCommandType["CHAT_INPUT"] = 1] = "CHAT_INPUT";
    ApplicationCommandType[ApplicationCommandType["USER"] = 2] = "USER";
    ApplicationCommandType[ApplicationCommandType["MESSAGE"] = 3] = "MESSAGE";
})(ApplicationCommandType = exports.ApplicationCommandType || (exports.ApplicationCommandType = {}));
var PermissionType;
(function (PermissionType) {
    PermissionType[PermissionType["CREATE_INSTANT_INVITE"] = 1] = "CREATE_INSTANT_INVITE";
    PermissionType[PermissionType["KICK_MEMBERS"] = 2] = "KICK_MEMBERS";
    PermissionType[PermissionType["BAN_MEMBERS"] = 4] = "BAN_MEMBERS";
    PermissionType[PermissionType["ADMINISTRATOR"] = 8] = "ADMINISTRATOR";
    PermissionType[PermissionType["MANAGE_CHANNELS"] = 16] = "MANAGE_CHANNELS";
    PermissionType[PermissionType["MANAGE_GUILD"] = 32] = "MANAGE_GUILD";
    PermissionType[PermissionType["ADD_REACTIONS"] = 64] = "ADD_REACTIONS";
    PermissionType[PermissionType["VIEW_AUDIT_LOG"] = 128] = "VIEW_AUDIT_LOG";
    PermissionType[PermissionType["PRIORITY_SPEAKER"] = 256] = "PRIORITY_SPEAKER";
    PermissionType[PermissionType["STREAM"] = 512] = "STREAM";
    PermissionType[PermissionType["VIEW_CHANNEL"] = 1024] = "VIEW_CHANNEL";
    PermissionType[PermissionType["SEND_MESSAGES"] = 2048] = "SEND_MESSAGES";
    PermissionType[PermissionType["SEND_TTS_MESSAGES"] = 4096] = "SEND_TTS_MESSAGES";
    PermissionType[PermissionType["MANAGE_MESSAGES"] = 8192] = "MANAGE_MESSAGES";
    PermissionType[PermissionType["EMBED_LINKS"] = 16384] = "EMBED_LINKS";
    PermissionType[PermissionType["ATTACH_FILES"] = 32768] = "ATTACH_FILES";
    PermissionType[PermissionType["READ_MESSAGE_HISTORY"] = 65536] = "READ_MESSAGE_HISTORY";
    PermissionType[PermissionType["MENTION_EVERYONE"] = 131072] = "MENTION_EVERYONE";
    PermissionType[PermissionType["USE_EXTERNAL_EMOJIS"] = 262144] = "USE_EXTERNAL_EMOJIS";
    PermissionType[PermissionType["VIEW_GUILD_INSIGHTS"] = 524288] = "VIEW_GUILD_INSIGHTS";
    PermissionType[PermissionType["CONNECT"] = 1048576] = "CONNECT";
    PermissionType[PermissionType["SPEAK"] = 2097152] = "SPEAK";
    PermissionType[PermissionType["MUTE_MEMBERS"] = 4194304] = "MUTE_MEMBERS";
    PermissionType[PermissionType["DEAFEN_MEMBERS"] = 8388608] = "DEAFEN_MEMBERS";
    PermissionType[PermissionType["MOVE_MEMBERS"] = 16777216] = "MOVE_MEMBERS";
    PermissionType[PermissionType["USE_VAD"] = 33554432] = "USE_VAD";
    PermissionType[PermissionType["CHANGE_NICKNAME"] = 67108864] = "CHANGE_NICKNAME";
    PermissionType[PermissionType["MANAGE_NICKNAMES"] = 134217728] = "MANAGE_NICKNAMES";
    PermissionType[PermissionType["MANAGE_ROLES"] = 268435456] = "MANAGE_ROLES";
    PermissionType[PermissionType["MANAGE_WEBHOOKS"] = 536870912] = "MANAGE_WEBHOOKS";
    PermissionType[PermissionType["MANAGE_EMOJIS_AND_STICKERS"] = 1073741824] = "MANAGE_EMOJIS_AND_STICKERS";
    PermissionType[PermissionType["USE_APPLICATION_COMMANDS"] = -2147483648] = "USE_APPLICATION_COMMANDS";
    PermissionType[PermissionType["REQUEST_TO_SPEAK"] = 1] = "REQUEST_TO_SPEAK";
    PermissionType[PermissionType["MANAGE_THREADS"] = 4] = "MANAGE_THREADS";
    PermissionType[PermissionType["USE_PUBLIC_THREADS"] = 8] = "USE_PUBLIC_THREADS";
    PermissionType[PermissionType["USE_PRIVATE_THREADS"] = 16] = "USE_PRIVATE_THREADS";
    PermissionType[PermissionType["USE_EXTERNAL_STICKERS"] = 32] = "USE_EXTERNAL_STICKERS";
})(PermissionType = exports.PermissionType || (exports.PermissionType = {}));
var InteractionType;
(function (InteractionType) {
    InteractionType[InteractionType["Ping"] = 1] = "Ping";
    InteractionType[InteractionType["ApplicationCommand"] = 2] = "ApplicationCommand";
    InteractionType[InteractionType["MessageComponent"] = 3] = "MessageComponent";
})(InteractionType = exports.InteractionType || (exports.InteractionType = {}));
var InteractionResponseType;
(function (InteractionResponseType) {
    InteractionResponseType[InteractionResponseType["Pong"] = 1] = "Pong";
    InteractionResponseType[InteractionResponseType["Acknowledge"] = 2] = "Acknowledge";
    InteractionResponseType[InteractionResponseType["ChannelMessage"] = 3] = "ChannelMessage";
    InteractionResponseType[InteractionResponseType["ChannelMessageWithSource"] = 4] = "ChannelMessageWithSource";
    InteractionResponseType[InteractionResponseType["AcknowledgeWithSource"] = 5] = "AcknowledgeWithSource";
})(InteractionResponseType = exports.InteractionResponseType || (exports.InteractionResponseType = {}));
var AllowedMentionTypes;
(function (AllowedMentionTypes) {
    AllowedMentionTypes["roles"] = "roles";
    AllowedMentionTypes["users"] = "users";
    AllowedMentionTypes["everyone"] = "everyone";
})(AllowedMentionTypes = exports.AllowedMentionTypes || (exports.AllowedMentionTypes = {}));
var EmbedType;
(function (EmbedType) {
    EmbedType["rich"] = "rich";
    EmbedType["image"] = "image";
    EmbedType["video"] = "video";
    EmbedType["gifv"] = "gifv";
    EmbedType["article"] = "article";
    EmbedType["link"] = "link";
})(EmbedType = exports.EmbedType || (exports.EmbedType = {}));
//# sourceMappingURL=types.js.map