import { Injectable } from "@nestjs/common";
import { GetDto, UserDto } from "../../common/dto/user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/common/entities/user.entity";
import password from "src/password";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userModel: Repository<User>
  ) {}

  async createUser(user: UserDto) {
    const encriptedtPassword = await password.bcryptPassword(user.password);
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
        .into(User)
        .values(insertUserData)
        .execute();
      return newPost.raw;
    } catch (error) {
      console.log(error);
    }
  }

  async findUserEmail(email: string): Promise<any> {
    try {
      const user = await this.userModel.findOne({
        where: { email: email },
      });
      if (!user) {
        return false;
      } else {
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async findUser(data): Promise<any> {
    try {
      let user;

      if (data.id && data.phoneNumber) {
        user = await this.userModel.findOne({
          where: { userId: data.id, phoneNumber: `${data.phoneNumber}` },
        });
      } else {
        user = await this.userModel.find();

        user.map((data) => {
          delete data.password;
        });
      }

      if (!user || user == undefined) {
        return false;
      } else {
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(data, detail): Promise<any> {
    try {
      let user;
      var ids = JSON.parse(`${detail.id}`);
      var phoneNumber = JSON.parse(`${detail.phoneNumber}`);

      if (ids.length > 0 && phoneNumber.length > 0) {
        const userData = {
          firstName: `${data.firstName}`,
          lastName: `${data.lastName}`,
          address: `${data.address}`,
        };

        user = await this.userModel
          .createQueryBuilder()
          .update(User)
          .set(userData)
          .where("userId IN (:...id)", { id: ids })
          .andWhere("phoneNumber IN (:...phone)", { phone: phoneNumber })
          .execute();
      }

      if (!user || user.affected == 0) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(detail): Promise<any> {
    try {
      var ids = JSON.parse(`${detail.id}`);
      var phoneNumber = JSON.parse(`${detail.phoneNumber}`);

      const deleteUser = await this.userModel
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("userId IN (:...id)", { id: ids })
        .andWhere("phoneNumber IN (:...phone)", { phone: phoneNumber })
        .execute();

      if (!deleteUser || deleteUser.affected == 0) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async findUserList(data): Promise<any> {
    try {
      let user;

      user = await this.userModel.find();

      user.map((data) => {
        delete data.password;
      });

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async findUpdateRecords(detail: GetDto): Promise<any> {
    try {
      let user;
      var ids = JSON.parse(`${detail.id}`);
      var phoneNumber = JSON.parse(`${detail.phoneNumber}`);

      user = await this.userModel
        .createQueryBuilder()
        .where(`"userId" IN (:...id)`, { id: ids })
        .andWhere(`"phoneNumber" IN (:...phone)`, { phone: phoneNumber })
        .getMany();

      user.map((data) => {
        delete data.password;
      });

      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
