import { Note } from "src/note/entities/note.entity";
import { Task } from "src/task/entities/task.entity";
import { User } from "src/user/entities/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Agenda extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(
        type => Note,
        note => note.agenda
    )
    notes: Note[];

    @OneToMany(
        type => Task,
        task => task.agenda
    )
    tasks: Task[];

    @ManyToOne(
        type => User,
        user => user.agendas,
        {
            nullable: false,
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }
    )
    user: User;
}