import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByName(firstName: string, lastName: string) {
    return this.findOne({});
  }

  //   async createAndSave(userData: CreateUserDto) {
  //     const { email, password, username } = userData;
  //     const user = new User();
  //     user.email = email;
  //     user.password = password;
  //     await this.save(user);
  //     return user;
  //   }
}
