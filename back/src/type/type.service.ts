import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './entities/type.entity';

@Injectable()
export class TypeService {
  async create(createTypeDto: CreateTypeDto) {
    try {
      let type = new Type();

      type.name = createTypeDto.name;

      return await type.save();
    } catch (e) {
      return e
    }
  }

  findAll() {
    return Type.find();
  }

  findOne(id: number) {
    return Type.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateTypeDto: UpdateTypeDto) {
    try {
      let type = await Type.findOne({
        where: {
          id: id
        }
      })

      type.name = updateTypeDto.name || type.name;

      return await type.save();
    } catch (e) {
      return e
    }
  }

  async remove(id: number) {
    try {
      let type = await Type.findOne({
        where: {
          id: id
        }
      })

      return await type.remove();
    } catch (e) {
      return e
    }
  }
}
