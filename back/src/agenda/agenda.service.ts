import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { Agenda } from './entities/agenda.entity';

@Injectable()
export class AgendaService {
  async create(createAgendaDto: CreateAgendaDto) {
    try {
      let agenda = new Agenda();
      agenda.name = createAgendaDto.name;
      agenda.description = createAgendaDto.description;
      agenda.user = await User.findOne({ 
        where: {
          id: createAgendaDto.userId
        },
        select: {
          id: true,
          email: true
        }
      });

      return await agenda.save();
    } catch (e) {
      return e
    }
  }

  findAll() {
    return Agenda.find({
      relations: {
        notes: true,
        tasks: {
          type: true,
          priority: true
        },
        shoppingLists: {
          shoppingItems: true
        }
      }
    });
  }

  findOne(id: number) {
    return Agenda.findOne({
      relations: {
        notes: true,
        tasks: {
          type: true,
          priority: true
        },
        shoppingLists: {
          shoppingItems: true
        }
      },
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateAgendaDto: UpdateAgendaDto) {
    try {
      let agenda = await Agenda.findOne({
        where: {
          id: id
        }
      })

      agenda.name = updateAgendaDto.name || agenda.name;
      agenda.description = updateAgendaDto.description || agenda.description;

      return await agenda.save();
    } catch (e) {
      return e
    }
  }

  async remove(id: number) {
    try {
      let agenda = await Agenda.findOne({
        where: {
          id: id
        }
      })

      return await agenda.remove();
    } catch (e) {
      return e
    }
  }
}
