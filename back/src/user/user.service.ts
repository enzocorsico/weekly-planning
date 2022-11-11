import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    try {
      let user = new User();

      user.email = createUserDto.email;
      user.password = createUserDto.password;
      user.lastName = createUserDto.lastName;
      user.firstName = createUserDto.firstName;

      return await user.save();
    } catch (e) {
      return e
    }
  }

  findAll() {
    return User.find();
  }

  findOne(id: number) {
    return User.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      let user = await User.findOne({
        where: {
          id: id
        }
      })

      user.lastName = updateUserDto.lastName || user.lastName;
      user.firstName = updateUserDto.firstName || user.firstName;

      return await user.save();
    } catch (e) {
      return e
    }
  }

  async remove(id: number) {
    try {
      let user = await User.findOne({
        where: {
          id: id
        }
      })

      return await user.remove();
    } catch (e) {
      return e
    }
  }
}
