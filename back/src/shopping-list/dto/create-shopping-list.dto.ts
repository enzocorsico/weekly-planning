import { IsNotEmpty } from "class-validator";

export class CreateShoppingListDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    agendaId: number;
}
