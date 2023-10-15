import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';

@Module({
  // C'est ici que nous devons donner les informations sur les controllers et les services
  controllers: [AppController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: null,
      database: 'nestjs',
      entities: [User],
      synchronize: true,
    }),
  ], // On importe les modules des différentes dossiers
})
export class AppModule {}
