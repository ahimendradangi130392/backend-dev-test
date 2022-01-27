import {
  IsNotEmpty,
  IsString,
  IsOptional,
  Matches,
  MaxLength,
  MinLength,
  IsEmail,
} from "class-validator";

export class UserDto {
  @IsOptional()
  userId: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        "Password is too weak, we need at least one uppercase letter, one lowercase letter, one number and one special character",
    }
  )
  password: string;

  @IsString()
  @MaxLength(10)
  @MinLength(10)
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}

export class GetDto {
  @IsOptional()
  id: number;

  @IsOptional()
  phoneNumber: string;
}
