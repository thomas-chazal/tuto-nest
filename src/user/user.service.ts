import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/user.create.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
/* import { Request } from 'express';
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  get(): Promise<User[]> {
    return this.userRepository.find();
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
