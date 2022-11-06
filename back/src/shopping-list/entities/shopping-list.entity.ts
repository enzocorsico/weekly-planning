import { ShoppingItem } from "src/shopping-item/entities/shopping-item.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShoppingList extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(
        type => ShoppingItem,
        shoppingItem => shoppingItem.shoppingList
    )
    shoppingItems: ShoppingItem[];
}