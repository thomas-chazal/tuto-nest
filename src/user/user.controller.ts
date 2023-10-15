import {
  Controller,
  Get,
  Post,
  // Req,
  Param,
  Delete,
  Patch,
  Body, // Importez le décorateur Body depuis '@nestjs/common'
} from '@nestjs/common';
// import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/user.create.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.get();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    // Utilisez le décorateur Body ici pour récupérer le corps de la requête
    return this.userService.create(createUserDto);
  }

  @Patch('/:userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param() param: { userId: number },
  ) {
    return this.userService.update(updateUserDto, param);
  }

  @Get('/:userId')
  getUserId(@Param() param: { userId: number }) {
    return this.userService.show(param);
  }

  @Delete('/:userId')
  DeleteUserId(@Param() param: { userId: number }) {
    return this.userService.delete(param);
  }
}
