import {
  Controller,
  Get,
  Post,
  Req,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  // A l'intérieur ce ce controller, nous devons créer une function
  constructor(private userService: UserService) {}

  @Get() // On définit le type de requête HTTP et on y affecte une route que l'on veut
  getUser() {
    return this.userService.get();
  }

  @Post()
  store(@Req() req: Request) {
    // store(@Req() req: Request) est une méthode avec un paramètre req qui est typé comme un objet Request d'Express. @Req() est un décorateur qui indique que req doit être injecté avec l'objet de requête actuel d'Express.
    return this.userService.create(req);
  }

  @Patch('/:userId')
  update(@Req() req: Request, @Param() param: { userId: number }) {
    // store(@Req() req: Request) est une méthode avec un paramètre req qui est typé comme un objet Request d'Express. @Req() est un décorateur qui indique que req doit être injecté avec l'objet de requête actuel d'Express.
    return this.userService.update(req, param);
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
