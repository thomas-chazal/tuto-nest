import { PassportStrategy } from '@nestjs/passport'; // Importation de PassportStrategy pour la mise en œuvre de la stratégie JWT.
import { ExtractJwt, Strategy } from 'passport-jwt'; // Importation de Strategy et ExtractJwt depuis passport-jwt pour extraire le JWT de la requête.
import { JwtConstant } from './auth.constant'; // Importation des constantes JWT, probablement le secret utilisé pour signer le token.
import { Injectable } from '@nestjs/common'; // Importation de Injectable pour que cette classe soit injectable dans d'autres parties de l'application.

@Injectable() // Décorateur pour marquer cette classe comme injectable.
export class JwtStrategy extends PassportStrategy(Strategy) {
  // Constructeur pour configurer la stratégie JWT.
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Configure l'extraction du JWT depuis le header d'authentification comme un token Bearer.
      ignoreExpiration: false, // Indique de ne pas ignorer l'expiration du token.
      secretOrKey: JwtConstant.secret, // Utilise le secret pour vérifier la signature du token.
    });
  }

  // La méthode validate est utilisée par Passport pour ajouter l'utilisateur à la requête.
  async validate(payload: any) {
    // Renvoie les données de l'utilisateur à partir du payload du token. Elles seront ajoutées à la requête en tant que objet utilisateur.
    return { id: payload.sub, email: payload.email };
  }
}
