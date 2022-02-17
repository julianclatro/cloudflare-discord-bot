import { Permissions } from './permissions';
import { ApplicationCommand, InteractionHandler } from './types';
export declare type Application = {
    applicationId: string;
    applicationSecret: string;
    publicKey: string;
    guildId?: string;
    commands: [ApplicationCommand, InteractionHandler][];
    permissions: Permissions;
};
export declare const createApplicationCommandHandler: (application: Application) => (request: Request) => any;
//# sourceMappingURL=handler.d.ts.map