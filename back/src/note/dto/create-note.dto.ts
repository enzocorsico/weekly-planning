import { IsNotEmpty } from "class-validator";

export class CreateNoteDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    agendaId: number;
}
