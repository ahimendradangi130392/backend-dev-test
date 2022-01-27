import { UserService } from "./user.service";
import { GetDto, UserDto } from "../../common/dto/user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    saveUserData(data: UserDto): Promise<{
        success: boolean;
        message: string;
        error: {};
        data?: undefined;
    } | {
        success: boolean;
        data: any;
        message: string;
        error?: undefined;
    }>;
    getUserData(data: GetDto): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: any;
        message: string;
    }>;
    updateUserData(detail: GetDto, data: UserDto): Promise<any>;
    deleteUserData(data: GetDto): Promise<any>;
}
