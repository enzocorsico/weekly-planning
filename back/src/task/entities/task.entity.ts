import { Agenda } from "src/agenda/entities/agenda.entity";
import { Priority } from "src/priority/entities/priority.entity";
import { Type } from "src/type/entities/type.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: "text"
    })
    description: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date

    @Column({
        nullable: false,
        default: false
    })
    isDone: boolean;

    @ManyToOne(
        type => Type,
        type => type.tasks,
        {
            nullable: false,
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }
    )
    type: Type;

    @ManyToOne(
        type => Priority,
        priority => priority.tasks,
        {
            nullable: false,
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }
    )
    priority: Priority;

    @ManyToOne(
        type => Agenda,
        agenda => agenda.tasks,
        {
            nullable: false,
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }
    )
    agenda: Agenda;
}
