// Le travail de main.ts est de charger le module d'application et de démarrer le serveur
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Création d'un serveur local host 3000
  await app.listen(3000);
}
bootstrap();
