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

@Controller()
export class AppController {
  // A l'intérieur ce ce controller, nous devons créer une function
  @Get() // On définit le type de requête HTTP et on y affecte une route que l'on veut
  getUser() {
    return { name: 'Thomas', email: 'thomaschazalpro@gmail.com' };
  }

  @Post()
  store(@Req() req: Request) {
    // store(@Req() req: Request) est une méthode avec un paramètre req qui est typé comme un objet Request d'Express. @Req() est un décorateur qui indique que req doit être injecté avec l'objet de requête actuel d'Express.
    console.log(req.body);
    return req.body;
  }

  @Patch(':/userId')
  update(@Req() req: Request) {
    // store(@Req() req: Request) est une méthode avec un paramètre req qui est typé comme un objet Request d'Express. @Req() est un décorateur qui indique que req doit être injecté avec l'objet de requête actuel d'Express.
    console.log(req.body);
    return req.body;
  }

  @Get('/:userId')
  getUserId(@Param() params: { userId: number }) {
    return params;
  }

  @Delete('/:userId')
  DeleteUserId(@Param() params: { userId: number }) {
    return params;
  }
}
