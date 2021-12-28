import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '../../common/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { MailModule } from '../mail/mail.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}