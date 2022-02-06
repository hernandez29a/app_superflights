import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";



export class UserDTO{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly username: string
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    readonly password: string;

    //@IsNotEmpty()
    //readonly status:boolean;
}