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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDto = exports.UserDto = void 0;
const class_validator_1 = require("class-validator");
class UserDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UserDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: "Password is too weak, we need at least one uppercase letter, one lowercase letter, one number and one special character",
    }),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(10),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "address", void 0);
exports.UserDto = UserDto;
class GetDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GetDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetDto.prototype, "phoneNumber", void 0);
exports.GetDto = GetDto;
//# sourceMappingURL=user.dto.js.map