import { Injectable } from '@nestjs/common'; // Importation du décorateur Injectable, nécessaire pour l'injection de dépendances.
import { JwtService } from '@nestjs/jwt'; // Importation du service JwtService pour gérer la signature et la validation des tokens JWT.
import { UserService } from 'src/user/user.service'; // Importation du UserService pour l'interaction avec les utilisateurs dans la base de données.

@Injectable() // Décorateur pour marquer la classe comme un fournisseur qui peut être injecté dans d'autres classes.
export class AuthService {
  // Constructeur pour injecter les services UserService et JwtService dans AuthService.
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // Méthode pour valider l'utilisateur à l'aide de son e-mail et de son mot de passe.
  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email); // Recherche d'un utilisateur par e-mail.
    // Si un utilisateur est trouvé et que le mot de passe est correct, renvoie l'utilisateur, sinon renvoie null.
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  // Méthode pour générer et renvoyer un token JWT lors de la connexion de l'utilisateur.
  async login(user: any) {
    const payload = { email: user.email, sub: user.id }; // Création du payload du token JWT.
    // Renvoie un objet contenant le token JWT, signé à partir du payload.
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
