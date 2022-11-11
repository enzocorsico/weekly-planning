import { Injectable } from '@nestjs/common';
import { ShoppingList } from 'src/shopping-list/entities/shopping-list.entity';
import { CreateShoppingItemDto } from './dto/create-shopping-item.dto';
import { UpdateShoppingItemDto } from './dto/update-shopping-item.dto';
import { ShoppingItem } from './entities/shopping-item.entity';

@Injectable()
export class ShoppingItemService {
  async create(createShoppingItemDto: CreateShoppingItemDto) {
    try {
      let shoppingItem = new ShoppingItem();

      shoppingItem.name = createShoppingItemDto.name;
      shoppingItem.quantity = createShoppingItemDto.quantity;
      shoppingItem.shoppingList = await ShoppingList.findOne({
        where: {
          id: createShoppingItemDto.shoppingListId
        }
      })

      return await shoppingItem.save();
    } catch (e) {
      return e
    }
  }

  findAll() {
    return ShoppingItem.find();
  }

  findOne(id: number) {
    return ShoppingItem.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateShoppingItemDto: UpdateShoppingItemDto) {
    try {
      let shoppingItem = await ShoppingItem.findOne({
        where: {
          id: id
        }
      })

      shoppingItem.name = updateShoppingItemDto.name || shoppingItem.name;
      shoppingItem.quantity = updateShoppingItemDto.quantity || shoppingItem.quantity;

      if (updateShoppingItemDto.shoppingListId) {
        shoppingItem.shoppingList = await ShoppingList.findOne({
          where: {
            id: updateShoppingItemDto.shoppingListId
          }
        })
      }

      return shoppingItem.save();
    } catch (e) {
      return e
    }
  }

  async remove(id: number) {
    try {
      let shoppingItem = await ShoppingItem.findOne({
        where: {
          id: id
        }
      })

      return await shoppingItem.remove();
    } catch (e) {
      return e
    }
  }
}
