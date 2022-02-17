import { ApplicationCommand, InteractionHandler } from "./types";
export declare const setup: ({ applicationId, applicationSecret, guildId, commands, }: {
    applicationId: string;
    applicationSecret: string;
    guildId?: string | undefined;
    commands: [ApplicationCommand, InteractionHandler][];
}) => () => Promise<Response>;
//# sourceMappingURL=setup.d.ts.map