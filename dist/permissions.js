"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = void 0;
class Permissions {
    constructor(types) {
        this.types = types;
    }
    compute() {
        let permission = 0;
        this.types.forEach(type => permission += type);
        return String(permission);
    }
}
exports.Permissions = Permissions;
//# sourceMappingURL=permissions.js.map