export class UpdateTaskDto {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    isDone: boolean;
    typeId: number;
    priorityId: number;
}
