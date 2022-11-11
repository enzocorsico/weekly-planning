import { IsNotEmpty } from "class-validator";

export class CreateShoppingItemDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    shoppingListId: number;
}
