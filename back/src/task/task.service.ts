import { Injectable } from '@nestjs/common';
import { Agenda } from 'src/agenda/entities/agenda.entity';
import { Priority } from 'src/priority/entities/priority.entity';
import { Type } from 'src/type/entities/type.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  async create(createTaskDto: CreateTaskDto) {
    try {
      let task = new Task();

      task.name = createTaskDto.name;
      task.description = createTaskDto.description;
      task.startDate = createTaskDto.startDate;
      task.endDate = createTaskDto.endDate;
      task.priority = await Priority.findOne({
        where: {
          id: createTaskDto.priorityId
        }
      })
      task.type = await Type.findOne({
        where: {
          id: createTaskDto.typeId
        }
      })
      task.agenda = await Agenda.findOne({
        where: {
          id: createTaskDto.agendaId
        }
      })

      return await task.save();
    } catch (e) {
      return e
    }
  }

  findAll() {
    return Task.find();
  }

  findOne(id: number) {
    return Task.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      let task = await Task.findOne({
        where: {
          id: id
        }
      })

      task.name = updateTaskDto.name || updateTaskDto.name;
      task.description = updateTaskDto.description || updateTaskDto.description;
      task.startDate = updateTaskDto.startDate || updateTaskDto.startDate;
      task.endDate = updateTaskDto.endDate || updateTaskDto.endDate;
      task.isDone = updateTaskDto.isDone || updateTaskDto.isDone;
      
      if (updateTaskDto.priorityId) {
        task.priority = await Priority.findOne({
          where: {
            id: updateTaskDto.priorityId
          }
        })
      }

      if (updateTaskDto.typeId) {
        task.type = await Type.findOne({
          where: {
            id: updateTaskDto.typeId
          }
        })
      }

      return await task.save()
    } catch (e) {
      return e
    }
  }

  async remove(id: number) {
    try {
      let task = await Task.findOne({
        where: {
          id: id
        }
      })

      return await task.remove();
    } catch (e) {
      return e
    }
  }
}
