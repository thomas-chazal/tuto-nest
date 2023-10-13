import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  // A l'intérieur ce ce controller, nous devons créer une function
  @Get() // On définit le type de requête HTTP et on y affecte une route que l'on veut
  getUser() {
    return { name: 'Thomas', email: 'thomaschazalpro@gmail.com' };
  }

  @Post()
  store() {
    return 'I am a post';
  }
}
