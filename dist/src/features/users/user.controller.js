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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_dto_1 = require("../../common/dto/user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async saveUserData(data) {
        try {
            const user = await this.userService.findUserEmail(data.email);
            if (user) {
                return {
                    success: false,
                    message: 'User already registered.',
                    error: {},
                };
            }
            const userData = await this.userService.createUser(data);
            delete userData[0].password;
            return {
                success: true,
                data: userData,
                message: 'User registered successfully.',
            };
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'Some problem occurred, Try again later.',
                err: err.toString(),
            });
        }
    }
    async getUserData(data) {
        try {
            const user = await this.userService.findUser(data);
            if (user == false) {
                return {
                    success: true,
                    data: user,
                    message: 'Record not found',
                };
            }
            else {
                return {
                    success: true,
                    data: user,
                    message: 'Record found',
                };
            }
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'Some problem occurred, Try again later.',
                err: err.toString(),
            });
        }
    }
    async updateUserData(detail, data) {
        try {
            var user;
            const userUpdated = await this.userService.updateUser(data, detail);
            if (userUpdated) {
                user = await this.userService.findUpdateRecords(detail);
                return {
                    success: true,
                    message: 'Record updated successfully.',
                    data: user,
                };
            }
            else {
                user = await this.userService.findUserList(detail);
                return {
                    success: true,
                    message: 'Record fetched successfully.',
                    data: user,
                };
            }
        }
        catch (err) {
            console.log(err);
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'Some problem occurred, Try again later.',
                err: err.toString(),
            });
        }
    }
    async deleteUserData(data) {
        try {
            const user = await this.userService.deleteUser(data);
            if (user == true) {
                return {
                    success: true,
                    message: 'User deleted successfully.',
                };
            }
            else {
                return {
                    success: common_1.HttpStatus.BAD_REQUEST,
                    message: 'User not found.',
                    error: {},
                };
            }
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'Some problem occurred, Try again later.',
                err: err.toString(),
            });
        }
    }
};
__decorate([
    (0, common_1.Post)('/users'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "saveUserData", null);
__decorate([
    (0, common_1.Get)('/users'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserData", null);
__decorate([
    (0, common_1.Put)('/users'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetDto,
        user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserData", null);
__decorate([
    (0, common_1.Delete)('/users'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUserData", null);
UserController = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map