import { Injectable } from '@nestjs/common';
import { Agenda } from 'src/agenda/entities/agenda.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {
  async create(createNoteDto: CreateNoteDto) {
    try {
      let note = new Note();

      note.name = createNoteDto.name;
      note.content = createNoteDto.content;
      note.agenda = await Agenda.findOne({
        where: {
          id: createNoteDto.agendaId
        }
      })

      return await note.save();
    } catch (e) {
      return e
    }
  }

  findAll() {
    return Note.find();
  }

  findOne(id: number) {
    return Note.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    try {
      let note = await Note.findOne({
        where: {
          id: id
        }
      })

      note.name = updateNoteDto.name || note.name;
      note.content = updateNoteDto.content || note.content;

      return await note.save();
    } catch (e) {
      return e
    }
  }

  async remove(id: number) {
    try {
      let note = await Note.findOne({
        where: {
          id: id
        }
      })

      return await note.remove();
    } catch (e) {
      return e
    }
  }
}
