import { Controller, Get, UseGuards } from '@nestjs/common'; // Importation de décorateurs et gardiens depuis @nestjs/common.
import { AuthGuard } from '@nestjs/passport'; // Importation d'AuthGuard depuis @nestjs/passport pour protéger les routes.

@Controller('profile') // Décorateur pour définir que cette classe est un contrôleur avec le préfixe de route 'profile'.
export class ProfileController {
  // Utilisation du décorateur @UseGuards pour appliquer AuthGuard avec la stratégie JWT pour protéger la route ci-dessous.
  @UseGuards(AuthGuard('jwt'))
  @Get() // Décorateur pour indiquer que la méthode ci-dessous doit être appelée pour les requêtes GET à l'endpoint '/profile'.
  profile() {
    // Retourne un objet avec un message lors de l'accès à cet endpoint. Notez que c'est une route protégée.
    return { message: 'I am protected route' };
  }
}
