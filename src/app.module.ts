import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  // C'est ici que nous devons donner les informations sur les controllers et les services
  controllers: [AppController],
})
export class AppModule {}
