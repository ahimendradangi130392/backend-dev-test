"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const bcryptPassword = async function (password) {
    const saltGenerate = 10;
    const hash = await bcrypt.hash(password, saltGenerate);
    return hash;
};
const password = {
    bcryptPassword
};
exports.default = password;
//# sourceMappingURL=password.js.map