import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService], // Il fournit quelque chose
  exports: [UserService], // Il exporte quelque chose
  imports: [TypeOrmModule.forFeature([User])], // Il importe quelque chose
})
export class UserModule {}
