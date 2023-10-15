import { Controller } from '@nestjs/common';

@Controller()
export class AppController {
  // A l'intérieur ce ce controller, nous devons créer une function
}

/* 
Le contrôleur AppController dans le fichier que vous m'avez fourni est en effet vide, ce qui est courant dans de nombreux projets NestJS par défaut, en particulier ceux générés avec la CLI de NestJS. Le contrôleur principal peut être utilisé pour gérer les routes racines de votre application ou d'autres tâches globales, mais il n'est pas obligatoire qu'il ait des routes ou des méthodes définies.

Dans de nombreux cas, les développeurs choisissent de laisser AppController vide et de gérer toutes les routes et logiques dans des modules et des contrôleurs spécifiques (comme vous l'avez fait avec ProfileController, AuthController, et UserController)
*/
