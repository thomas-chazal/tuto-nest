import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/user.create.dto';
/* import { Request } from 'express';
 */
@Injectable()
export class UserService {
  get() {
    return { name: 'Thomas Paul Antoine', email: 'thomaschazalpro@gmail.com' };
  }
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }
  update(updateUserDto: UpdateUserDto, userId: number) {
    return { body: updateUserDto, userId };
  }
  show(userId: number) {
    return { userId };
  }
  delete(userId: number) {
    return { userId };
  }
}
