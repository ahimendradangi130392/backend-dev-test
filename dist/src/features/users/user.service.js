"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../common/entities/user.entity");
const password_1 = require("../../password");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    createUsers(data) {
        throw new Error('Method not implemented.');
    }
    async createUser(user) {
        const encriptedtPassword = await password_1.default.bcryptPassword(user.password);
        try {
            const insertUserData = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                password: encriptedtPassword,
                address: user.address,
            };
            const newPost = await this.userModel
                .createQueryBuilder()
                .insert()
                .into(user_entity_1.User)
                .values(insertUserData)
                .execute();
            return newPost.raw;
        }
        catch (error) {
            console.log(error);
        }
    }
    async findUserEmail(email) {
        try {
            const user = await this.userModel.findOne({
                where: { email: email },
            });
            if (!user) {
                return false;
            }
            else {
                return user;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async findUser(data) {
        try {
            let user;
            if (data.id && data.phoneNumber) {
                user = await this.userModel.findOne({
                    where: { userId: data.id, phoneNumber: `${data.phoneNumber}` },
                });
                delete user.password;
            }
            else {
                user = await this.userModel.find();
                user.map((data) => {
                    delete data.password;
                });
            }
            if (!user) {
                return false;
            }
            else {
                return user;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateUser(data, detail) {
        try {
            let user;
            var ids = JSON.parse(`${detail.id}`);
            var phoneNumber = JSON.parse(`${detail.phoneNumber}`);
            const encriptedtPassword = await password_1.default.bcryptPassword(data.password);
            if (ids.length > 0 && phoneNumber.length > 0) {
                const userData = {
                    firstName: `${data.firstName}`,
                    lastName: `${data.lastName}`,
                    password: `${encriptedtPassword}`,
                    address: `${data.address}`,
                };
                user = await this.userModel
                    .createQueryBuilder()
                    .update(user_entity_1.User)
                    .set(userData)
                    .where("userId IN (:...id)" && "phoneNumber IN (:...phone)", { id: ids } && { phone: phoneNumber })
                    .execute();
            }
            if (!user) {
                return false;
            }
            else {
                return true;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteUser(detail) {
        try {
            let deleteUser;
            var ids = JSON.parse(`${detail.id}`);
            var phoneNumber = JSON.parse(`${detail.phoneNumber}`);
            await this.userModel
                .createQueryBuilder()
                .delete()
                .from(user_entity_1.User)
                .where("userId IN (:...id)" && "phoneNumber IN (:...phone)", { id: ids } && { phone: phoneNumber })
                .execute();
            return true;
        }
        catch (error) {
            console.log(error);
        }
    }
    async findUserList(data) {
        try {
            let user;
            user = await this.userModel.find();
            user.map((data) => {
                delete data.password;
            });
            return user;
        }
        catch (error) {
            console.log(error);
        }
    }
    async findUpdateRecords(detail) {
        try {
            let user;
            var ids = JSON.parse(`${detail.id}`);
            var phoneNumber = JSON.parse(`${detail.phoneNumber}`);
            user = await this.userModel
                .createQueryBuilder()
                .where("User.userId IN (:...id)" && "User.phoneNumber IN (:...phone)", { id: ids } && { phone: phoneNumber })
                .getMany();
            user.map((data) => {
                delete data.password;
            });
            return user;
        }
        catch (error) {
            console.log(error);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map