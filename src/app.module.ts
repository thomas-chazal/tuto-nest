import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';

@Module({
  // C'est ici que nous devons donner les informations sur les controllers et les services
  controllers: [AppController],
  imports: [UserModule], // On importe le module UserModule
})
export class AppModule {}
