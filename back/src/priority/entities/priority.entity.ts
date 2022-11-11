import { Task } from "src/task/entities/task.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Priority extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: false,
        default: 0
    })
    rewardPoints: number;

    @OneToMany(
        type => Task,
        task => task.priority
    )
    tasks: Task[];
}
