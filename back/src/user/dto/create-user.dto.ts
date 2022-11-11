import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    firstName: string;
}
