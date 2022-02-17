export declare type Snowflake = string;
export declare enum ApplicationCommandOptionType {
    SUB_COMMAND = 1,
    SUB_COMMAND_GROUP = 2,
    STRING = 3,
    INTEGER = 4,
    BOOLEAN = 5,
    USER = 6,
    CHANNEL = 7,
    ROLE = 8,
    MENTIONABLE = 9,
    NUMBER = 10
}
export declare type ApplicationCommandOptionChoice = {
    name: string;
    value: string | number;
};
export declare enum ApplicationCommandType {
    CHAT_INPUT = 1,
    USER = 2,
    MESSAGE = 3
}
export declare type ApplicationCommand = {
    name: Snowflake;
    type?: ApplicationCommandType;
    description: string;
    options?: ApplicationCommandOption[];
};
export declare type ApplicationCommandOption = {
    type: ApplicationCommandOptionType;
    name: string;
    description: string;
    required?: boolean;
    choices?: ApplicationCommandOptionChoice[];
    options?: ApplicationCommandOption[];
};
export declare type ApplicationCommandInteractionDataOption = {
    name: string;
    type: ApplicationCommandOptionType;
    value?: ApplicationCommandOptionChoice;
    options?: ApplicationCommandInteractionDataOption[];
};
export declare enum PermissionType {
    CREATE_INSTANT_INVITE = 1,
    KICK_MEMBERS = 2,
    BAN_MEMBERS = 4,
    ADMINISTRATOR = 8,
    MANAGE_CHANNELS = 16,
    MANAGE_GUILD = 32,
    ADD_REACTIONS = 64,
    VIEW_AUDIT_LOG = 128,
    PRIORITY_SPEAKER = 256,
    STREAM = 512,
    VIEW_CHANNEL = 1024,
    SEND_MESSAGES = 2048,
    SEND_TTS_MESSAGES = 4096,
    MANAGE_MESSAGES = 8192,
    EMBED_LINKS = 16384,
    ATTACH_FILES = 32768,
    READ_MESSAGE_HISTORY = 65536,
    MENTION_EVERYONE = 131072,
    USE_EXTERNAL_EMOJIS = 262144,
    VIEW_GUILD_INSIGHTS = 524288,
    CONNECT = 1048576,
    SPEAK = 2097152,
    MUTE_MEMBERS = 4194304,
    DEAFEN_MEMBERS = 8388608,
    MOVE_MEMBERS = 16777216,
    USE_VAD = 33554432,
    CHANGE_NICKNAME = 67108864,
    MANAGE_NICKNAMES = 134217728,
    MANAGE_ROLES = 268435456,
    MANAGE_WEBHOOKS = 536870912,
    MANAGE_EMOJIS_AND_STICKERS = 1073741824,
    USE_APPLICATION_COMMANDS = -2147483648,
    REQUEST_TO_SPEAK = 1,
    MANAGE_THREADS = 4,
    USE_PUBLIC_THREADS = 8,
    USE_PRIVATE_THREADS = 16,
    USE_EXTERNAL_STICKERS = 32
}
export declare enum InteractionType {
    Ping = 1,
    ApplicationCommand = 2,
    MessageComponent = 3
}
export declare type OptionType = any;
export declare type ApplicationCommandInteractionData = {
    id: string;
    name: string;
    options?: ApplicationCommandInteractionDataOption[];
    resolved?: any;
};
export declare type GuildMember = {
    deaf: boolean;
    is_pending: boolean;
    joined_at: string;
    mute: boolean;
    nick?: string;
    pending: boolean;
    permissions: string;
    premium_since?: string;
    roles: string[];
    user: {
        avatar?: string;
        discriminator: string;
        id: string;
        public_flags: number;
        username: string;
    };
};
export declare type Interaction = {
    id: string;
    type: InteractionType;
    data?: ApplicationCommandInteractionData;
    guild_id: string;
    channel_id: string;
    member: GuildMember;
    token: string;
    version: number;
};
export declare enum InteractionResponseType {
    Pong = 1,
    Acknowledge = 2,
    ChannelMessage = 3,
    ChannelMessageWithSource = 4,
    AcknowledgeWithSource = 5
}
export declare enum AllowedMentionTypes {
    roles = "roles",
    users = "users",
    everyone = "everyone"
}
export declare type AllowedMentions = {
    parse?: AllowedMentionTypes[];
    roles?: string[];
    users?: string[];
    replied_user?: boolean;
};
export declare enum EmbedType {
    rich = "rich",
    image = "image",
    video = "video",
    gifv = "gifv",
    article = "article",
    link = "link"
}
export declare type EmbedThumbnail = {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
};
export declare type EmbedVideo = {
    url?: string;
    height?: number;
    width?: number;
};
export declare type EmbedImage = {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
};
export declare type EmbedProvider = {
    name?: string;
    url?: string;
};
export declare type EmbedAuthor = {
    name?: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
};
export declare type EmbedFooter = {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
};
export declare type EmbedField = {
    name: string;
    value: string;
    inline?: boolean;
};
export declare type Embed = {
    title?: string;
    type?: EmbedType;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: number;
    footer?: EmbedFooter;
    image?: EmbedImage;
    thumbnail?: EmbedThumbnail;
    video?: EmbedVideo;
    provider?: EmbedProvider;
    author?: EmbedAuthor;
    fields?: EmbedField[];
};
export declare type InteractionApplicationCommandCallbackData = {
    tts?: boolean;
    content: string;
    embeds?: Embed[];
    allowed_mentions?: AllowedMentions;
};
export declare type InteractionResponse = {
    type: InteractionResponseType;
    data?: InteractionApplicationCommandCallbackData;
};
export declare type InteractionHandler = (interaction: Interaction) => Promise<InteractionResponse> | InteractionResponse;
//# sourceMappingURL=types.d.ts.map