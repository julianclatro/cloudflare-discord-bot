import { ApplicationCommand, InteractionHandler } from "./types";
export declare const interaction: ({ publicKey, commands, }: {
    publicKey: string;
    commands: [ApplicationCommand, InteractionHandler][];
}) => (request: Request) => Promise<Response>;
//# sourceMappingURL=interaction.d.ts.map