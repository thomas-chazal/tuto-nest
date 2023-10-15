// Importations nécessaires pour la configuration de l'application.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Crée une instance de l'application NestJS en utilisant le module principal (AppModule).
  const app = await NestFactory.create(AppModule);

  // Applique un tuyau (pipe) de validation global qui valide toutes les entrées entrantes selon les règles définies dans les DTOs.
  // `whitelist: true` va retirer tous les attributs qui ne sont pas explicitement permis par les DTOs avant de valider les données.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // Démarre l'application pour écouter sur le port 3000.
  await app.listen(3000);
}

// Appelle la fonction bootstrap pour démarrer l'application.
bootstrap();
