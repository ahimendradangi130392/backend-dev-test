import { IsNotEmpty, IsString, IsOptional, Matches, MaxLength, MinLength, IsEmail, IsNumberString} from 'class-validator' ;

export class UserDto {
    @IsOptional()
    userId: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(8)//Checking length
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            'Password is too weak, we need at least one uppercase letter, one lowercase letter, one number and one special character',
        },
      )
    password: string;;

    @IsNumberString()
    @IsOptional()
    phoneNumber:string;

    @IsString()
    @IsOptional()
    address: string;


}

export class GetDto {
  @IsNotEmpty()
  id: number;

  @IsNumberString()
  @IsNotEmpty()
  phoneNumber:string;
}