import { Injectable } from '@nestjs/common';
import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';
import { Priority } from './entities/priority.entity';

@Injectable()
export class PriorityService {
  async create(createPriorityDto: CreatePriorityDto) {
    try {
      let priority = new Priority();

      priority.name = createPriorityDto.name;
      priority.rewardPoints = createPriorityDto.rewardPoints;

      return await priority.save();
    } catch (e) {
      return e
    }
  }

  findAll() {
    return Priority.find();
  }

  findOne(id: number) {
    return Priority.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updatePriorityDto: UpdatePriorityDto) {
    try {
      let priority = await Priority.findOne({
        where: {
          id: id
        }
      })

      priority.name = updatePriorityDto.name || priority.name;
      priority.rewardPoints = updatePriorityDto.rewardPoints || priority.rewardPoints;

      return await priority.save();
    } catch (e) {
      return e
    }
  }

  async remove(id: number) {
    try {
      let priority = await Priority.findOne({
        where: {
          id: id
        }
      })

      return await priority.remove();
    } catch (e) {
      return e
    }
  }
}
