import { Agenda } from "src/agenda/entities/agenda.entity";
import { ShoppingItem } from "src/shopping-item/entities/shopping-item.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShoppingList extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @OneToMany(
        type => ShoppingItem,
        shoppingItem => shoppingItem.shoppingList
    )
    shoppingItems: ShoppingItem[];

    @ManyToOne(
        type => Agenda,
        agenda => agenda.shoppingLists,
        {
            nullable: false,
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }
    )
    agenda: Agenda;
}