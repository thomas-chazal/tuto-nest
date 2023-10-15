// Le travail de main.ts est de charger le module d'application et de démarrer le serveur
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Création d'un serveur local host 3000
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  // configure un tuyau global de validation pour l'application, ce qui permet de valider automatiquement les données d'entrée avant de les traiter, améliorant ainsi la sécurité et la fiabilité de l'application.
  await app.listen(3000);
}
bootstrap();
