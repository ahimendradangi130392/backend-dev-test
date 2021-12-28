import { GetDto, UserDto } from '../../common/dto/user.dto';
import { Repository } from 'typeorm';
import { User } from 'src/common/entities/user.entity';
export declare class UserService {
    private userModel;
    createUsers(data: UserDto): void;
    constructor(userModel: Repository<User>);
    createUser(user: UserDto): Promise<any>;
    findUserEmail(email: string): Promise<any>;
    findUser(data: any): Promise<any>;
    updateUser(data: any, detail: GetDto): Promise<any>;
    deleteUser(detail: any): Promise<any>;
    findUserList(data: any): Promise<any>;
    findUpdateRecords(detail: GetDto): Promise<any>;
}
