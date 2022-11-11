import { Injectable } from '@nestjs/common';
import { Agenda } from 'src/agenda/entities/agenda.entity';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingList } from './entities/shopping-list.entity';

@Injectable()
export class ShoppingListService {
  async create(createShoppingListDto: CreateShoppingListDto) {
    try {
      let shoppingList = new ShoppingList();

      shoppingList.name = createShoppingListDto.name;
      shoppingList.agenda = await Agenda.findOne({
        where: {
          id: createShoppingListDto.agendaId
        }
      })

      return await shoppingList.save();
    } catch (e) {
      return e
    }
  }

  findAll() {
    return ShoppingList.find();
  }

  findOne(id: number) {
    return ShoppingList.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    try {
      let shoppingList = await ShoppingList.findOne({
        where: {
          id: id
        }
      })

      shoppingList.name = updateShoppingListDto.name || shoppingList.name;

      return await shoppingList.save()
    } catch (e) {
      return e
    }
  }

  async remove(id: number) {
    try {
      let shoppingList = await ShoppingList.findOne({
        where: {
          id: id
        }
      })

      return await shoppingList.remove();
    } catch (e) {
      return e
    }
  }
}
