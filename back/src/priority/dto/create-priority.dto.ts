import { IsNotEmpty } from "class-validator";

export class CreatePriorityDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    rewardPoints: number;
}
