import { Strategy } from 'passport-local'; // Importation de Strategy depuis passport-local pour gérer l'authentification locale.
import { PassportStrategy } from '@nestjs/passport'; // Importation de PassportStrategy depuis @nestjs/passport pour intégrer la stratégie Passport.js dans NestJS.
import { Injectable, UnauthorizedException } from '@nestjs/common'; // Importation de Injectable et UnauthorizedException depuis @nestjs/common.
import { AuthService } from './auth.service'; // Importation du service d'authentification pour valider l'utilisateur.

@Injectable() // Décorateur Injectable, pour permettre l'injection de cette classe dans d'autres classes.
export class LocalStrategy extends PassportStrategy(Strategy) {
  // Constructeur pour injecter AuthService et configurer la stratégie d'authentification locale.
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // Appelle le constructeur de la stratégie parent avec la configuration, ici on utilise le champ 'email' comme champ de nom d'utilisateur.
  }

  // Méthode validate, appelée automatiquement lors de l'utilisation de cette stratégie d'authentification.
  async validate(email: string, password: string): Promise<any> {
    // Utilisation du service d'authentification pour valider les informations de connexion de l'utilisateur.
    const user = await this.authService.validateUser(email, password);
    // Si l'utilisateur n'est pas trouvé ou le mot de passe est incorrect, lance une exception UnauthorizedException.
    if (!user) {
      throw new UnauthorizedException();
    }
    // Si la validation est réussie, renvoie l'objet utilisateur. Cet objet utilisateur sera ensuite disponible dans la requête en tant que req.user.
    return user;
  }
}
