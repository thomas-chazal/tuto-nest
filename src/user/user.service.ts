import { Injectable } from '@nestjs/common'; // Importe le décorateur Injectable depuis @nestjs/common.
import { UpdateUserDto } from './dto/user-update.dto'; // Importe le DTO pour la mise à jour d'un utilisateur.
import { CreateUserDto } from './dto/user.create.dto'; // Importe le DTO pour la création d'un utilisateur.
import { Repository } from 'typeorm'; // Importe Repository depuis typeorm pour interagir avec la base de données.
import { User } from './entity/user.entity'; // Importe l'entité User pour typage et interaction avec la base de données.
import { InjectRepository } from '@nestjs/typeorm'; // Importe le décorateur InjectRepository pour l'injection du dépôt User.

@Injectable() // Décorateur qui marque la classe comme un fournisseur qui peut être injecté dans d'autres classes.
export class UserService {
  // Constructeur pour injecter le dépôt User dans le service.
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Méthode pour récupérer tous les utilisateurs depuis la base de données.
  get(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Méthode pour créer un nouvel utilisateur dans la base de données.
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  // Méthode pour mettre à jour un utilisateur dans la base de données en fonction de son ID.
  update(updateUserDto: UpdateUserDto, userId: number) {
    return this.userRepository.update(userId, updateUserDto);
  }

  // Méthode pour récupérer un utilisateur depuis la base de données en fonction de son ID.
  show(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  // Méthode pour récupérer un utilisateur depuis la base de données en fonction de son email.
  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  // Méthode pour supprimer un utilisateur de la base de données en fonction de son ID.
  delete(userId: number) {
    return this.userRepository.delete(userId);
  }
}
