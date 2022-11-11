import { Agenda } from "src/agenda/entities/agenda.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @Column()
    lastName: string;

    @Column()
    firstName: string;

    @Column({
        nullable: false,
        default: 0
    })
    rewardPoints: number;

    @OneToMany(
        type => Agenda,
        agenda => agenda.user
    )
    agendas: Agenda[];
}