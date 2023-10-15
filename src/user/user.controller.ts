import {
  Controller,
  Get,
  Post,
  // Req,
  Param,
  Delete,
  Patch,
  Body,
  ParseIntPipe, // Importez le décorateur Body depuis '@nestjs/common'
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
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUserDto, userId);
  }

  @Get('/:userId')
  getUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  @Delete('/:userId')
  DeleteUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
