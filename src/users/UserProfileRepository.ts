import { EntityRepository, Repository } from 'typeorm';
import { Profile } from './entities/userProfile.entity';

@EntityRepository(Profile)
export class UserProfileRepository extends Repository<Profile> {
  findByName(firstName: string, lastName: string) {
    return this.findOne({});
  }
}
