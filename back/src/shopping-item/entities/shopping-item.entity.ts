import { ShoppingList } from "src/shopping-list/entities/shopping-list.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShoppingItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column()
    quantity: number;

    @ManyToOne(
        type => ShoppingList,
        shoppingList => shoppingList.shoppingItems,
        {
            nullable: false,
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }
    )
    shoppingList: ShoppingList;
}