import { Module } from '@nestjs/common'; // Import du décorateur Module depuis @nestjs/common.
import { AppController } from './app.controller'; // Import du controller principal de l'application.
import { UserModule } from './user/user.module'; // Import du module utilisateur, probablement utilisé pour gérer les fonctionnalités liées aux utilisateurs.
import { TypeOrmModule } from '@nestjs/typeorm'; // Import de TypeOrmModule pour intégrer TypeORM avec NestJS.
import { User } from './user/entity/user.entity'; // Import de l'entité User, probablement utilisé pour définir la structure de vos utilisateurs dans la base de données.
import { AuthModule } from './auth/auth.module'; // Import du module d'authentification, probablement utilisé pour gérer l'authentification et la connexion des utilisateurs.
import { ProfileModule } from './profile/profile.module'; // Import du module de profil, probablement utilisé pour gérer les fonctionnalités liées au profil utilisateur.

@Module({
  // Utilisation du décorateur Module pour définir un module dans NestJS.
  controllers: [AppController], // Déclaration du controller principal à utiliser dans ce module.
  imports: [
    UserModule, // Importation du module utilisateur pour utiliser ses fonctionnalités (comme les services ou les controllers qu'il exporte) dans ce module.
    TypeOrmModule.forRoot({
      // Configuration de la connexion à la base de données via TypeORM.
      type: 'mysql', // Spécification de l'utilisation de MySQL comme système de gestion de base de données.
      host: '127.0.0.1', // Adresse du serveur de base de données. Ici, il s'agit de l'adresse locale standard.
      port: 3306, // Port par défaut de MySQL.
      username: 'root', // Utilisateur pour la connexion à la base de données. Soyez prudent avec l'utilisation de l'utilisateur root dans un environnement de production.
      password: null, // Mot de passe pour la connexion à la base de données. En général, évitez d'avoir un mot de passe nul, surtout pour l'utilisateur root.
      database: 'nestjs', // Nom de la base de données à laquelle se connecter.
      entities: [User], // Les entités à synchroniser avec la base de données.
      synchronize: true, // Indique à TypeORM de mettre à jour automatiquement les tables de la base de données en fonction de vos entités. À utiliser avec prudence en production.
    }),
    AuthModule, // Importation du module d'authentification pour utiliser ses fonctionnalités dans ce module.
    ProfileModule, // Importation du module de profil pour utiliser ses fonctionnalités dans ce module.
  ],
})
export class AppModule {} // Exportation du module principal de l'application.
