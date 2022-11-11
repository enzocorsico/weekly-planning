import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { AgendaModule } from './agenda/agenda.module';
import { Agenda } from './agenda/entities/agenda.entity';
import { NoteModule } from './note/note.module';
import { Note } from './note/entities/note.entity';
import { TaskModule } from './task/task.module';
import { Task } from './task/entities/task.entity';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingList } from './shopping-list/entities/shopping-list.entity';
import { ShoppingItemModule } from './shopping-item/shopping-item.module';
import { ShoppingItem } from './shopping-item/entities/shopping-item.entity';
import { PriorityModule } from './priority/priority.module';
import { Priority } from './priority/entities/priority.entity';
import { TypeModule } from './type/type.module';
import { Type } from './type/entities/type.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.PORT_MYSQL),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [
        User,
        Agenda,
        Note,
        Task,
        ShoppingList,
        ShoppingItem,
        Priority,
        Type
      ],
      synchronize: true
    }),
    UserModule,
    AgendaModule,
    NoteModule,
    TaskModule,
    ShoppingListModule,
    ShoppingItemModule,
    PriorityModule,
    TypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
