import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { Profile } from '../entities/userProfile.entity';

@EntityRepository(Profile)
export class UserProfileRepository extends Repository<Profile> {
  findByName(firstName: string, lastName: string) {
    return this.findOne({});
  }

  //   async createAndSave(userData: CreateUserDto) {
  //     const { username, age } = userData;
  //     const profile = new Profile();
  //     profile.age = age;

  //     await this.save(profile);
  //     return profile;
  //   }
}
