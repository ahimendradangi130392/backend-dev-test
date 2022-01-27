import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Post,
  Put,
  Query,
  Injectable,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { GetDto, UserDto } from "../../common/dto/user.dto";

@Injectable()
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post("/users")
  async saveUserData(@Body() data: UserDto) {
    try {
      const user = await this.userService.findUserEmail(data.email);
      if (user) {
        return {
          success: false,
          message: "User already registered.",
          error: {},
        };
      }
      const userData = await this.userService.createUser(data);
      delete userData[0].password;
      return {
        success: true,
        data: userData,
        message: "User registered successfully.",
      };
    } catch (err) {
      throw new InternalServerErrorException({
        success: false,
        message: "Some problem occurred, Try again later.",
        err: err.toString(),
      });
    }
  }

  @Get("/users")
  async getUserData(@Query() data: GetDto) {
    try {
      const user = await this.userService.findUser(data);

      if (user == false) {
        return {
          success: false,
          message: "Record not found",
        };
      } else {
        delete user.password;
        return {
          success: true,
          data: user,
          message: "Record found",
        };
      }
    } catch (err) {
      throw new InternalServerErrorException({
        success: false,
        message: "Some problem occurred, Try again later.",
        err: err.toString(),
      });
    }
  }

  @Put("/users")
  async updateUserData(
    @Query() detail: GetDto,
    @Body() data: UserDto
  ): Promise<any> {
    try {
      var user;

      const userUpdated = await this.userService.updateUser(data, detail);

      if (userUpdated) {
        user = await this.userService.findUpdateRecords(detail);
        return {
          success: true,
          message: "Record updated successfully.",
          data: user,
        };
      } else {
        user = await this.userService.findUserList(detail);
        return {
          success: true,
          message: "Record fetched successfully.",
          data: user,
        };
      }
    } catch (err) {
      throw new InternalServerErrorException({
        success: false,
        message: "Some problem occurred, Try again later.",
        err: err.toString(),
      });
    }
  }

  @Delete("/users")
  async deleteUserData(@Query() data: GetDto): Promise<any> {
    try {
      const user = await this.userService.deleteUser(data);

      if (user == true) {
        return {
          success: true,
          message: "User deleted successfully.",
        };
      } else {
        return {
          success: HttpStatus.BAD_REQUEST,
          message: "User not found.",
          error: {},
        };
      }
    } catch (err) {
      throw new InternalServerErrorException({
        success: false,
        message: "Some problem occurred, Try again later.",
        err: err.toString(),
      });
    }
  }
}
