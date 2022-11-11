import { IsNotEmpty } from "class-validator";

export class CreateAgendaDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    userId: number;
}
