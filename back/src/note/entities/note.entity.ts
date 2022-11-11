import { Agenda } from "src/agenda/entities/agenda.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        type: "text"
    })
    content: string;

    @ManyToOne(
        type => Agenda,
        agenda => agenda.notes,
        {
            nullable: false,
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }
    )
    agenda: Agenda;
}