import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/user.create.dto';

@Controller('user') // Déclaration d'un contrôleur avec le préfixe 'user' pour les routes.
export class UserController {
  // Injonction de dépendance de UserService dans UserController.
  constructor(private userService: UserService) {}

  @Get() // Décorateur définissant une route HTTP GET.
  getUser() {
    // Appelle la méthode get de UserService et renvoie son résultat.
    return this.userService.get();
  }

  @Post() // Décorateur définissant une route HTTP POST.
  store(@Body() createUserDto: CreateUserDto) {
    // Utilise le décorateur @Body() pour récupérer le corps de la requête et
    // le passe à la méthode create de userService, puis renvoie son résultat.
    return this.userService.create(createUserDto);
  }

  @Patch('/:userId') // Décorateur définissant une route HTTP PATCH avec un paramètre dynamique 'userId'.
  update(
    @Body() updateUserDto: UpdateUserDto, // Extrai l'objet du corps de la requête HTTP.
    @Param('userId', ParseIntPipe) userId: number, // Extrai et parse le paramètre 'userId' de l'URL.
  ) {
    // Appelle la méthode update de UserService avec les paramètres fournis et renvoie son résultat.
    return this.userService.update(updateUserDto, userId);
  }

  @Get('/:userId') // Décorateur définissant une route HTTP GET avec un paramètre dynamique 'userId'.
  getUserId(@Param('userId', ParseIntPipe) userId: number) {
    // Appelle la méthode show de UserService avec le paramètre userId et renvoie son résultat.
    return this.userService.show(userId);
  }

  @Delete('/:userId') // Décorateur définissant une route HTTP DELETE avec un paramètre dynamique 'userId'.
  DeleteUserId(@Param('userId', ParseIntPipe) userId: number) {
    // Appelle la méthode delete de UserService avec le paramètre userId et renvoie son résultat.
    return this.userService.delete(userId);
  }
}
