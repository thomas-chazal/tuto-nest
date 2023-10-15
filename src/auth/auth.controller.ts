import { Controller, Post, Request, UseGuards } from '@nestjs/common'; // Importation des décorateurs et objets nécessaires depuis @nestjs/common.
import { AuthGuard } from '@nestjs/passport'; // Importation d'AuthGuard depuis @nestjs/passport pour l'utilisation des gardes Passport.js.
import { AuthService } from './auth.service'; // Importation du service d'authentification que vous allez utiliser.

@Controller('auth') // Décorateur pour déclarer une classe en tant que contrôleur avec le préfixe de route 'auth'.
export class AuthController {
  // Constructeur pour l'injection de dépendance du AuthService.
  constructor(private authService: AuthService) {}

  // Utilisation des gardes d'authentification Passport.js avec la stratégie 'local'.
  @UseGuards(AuthGuard('local'))
  @Post('/login') // Décorateur pour déclarer une méthode comme gestionnaire d'une route POST avec le chemin '/login'.
  async login(@Request() req: any) {
    // Méthode de connexion qui utilise le service d'authentification.
    // Le décorateur @Request() est utilisé pour injecter l'objet de requête,
    // et 'req.user' sera fourni par la stratégie d'authentification Passport.js.
    return this.authService.login(req.user);
  }
}
