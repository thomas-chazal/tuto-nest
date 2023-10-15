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
  update(updateUserDto: UpdateUserDto, param: { userId: number }) {
    return { body: updateUserDto, param };
  }
  show(param: { userId: number }) {
    return param;
  }
  delete(param: { userId: number }) {
    return param;
  }
}
