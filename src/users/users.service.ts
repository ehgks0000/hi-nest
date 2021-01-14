import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Profile } from './entities/userProfile.entity';
import { UserProfileRepository } from './UserProfileRepository';
import { UserRepository } from './UserRepository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
    private readonly userProfileRepository: UserProfileRepository, // private readonly userRepository: Repository<User>, // private readonly userProfileRepository: Repository<Profile>,
  ) {}

  findAll(): Promise<User[]> {
    console.log('유저 전체 불러오기');
    return this.userRepository.find();
  }

  findOne(userID: number): Promise<User> {
    console.log(userID);
    return this.userRepository.findOne({ id: userID });
  }

  async create(userData: CreateUserDto): Promise<User> {
    console.log(userData);
    const { email, username, password, age } = userData;
    const profile = new Profile();
    profile.age = age;
    profile.username = username;
    await this.userProfileRepository.save(profile);

    const user = new User();
    user.email = email;
    user.password = password;
    user.profile = profile;

    await this.userRepository.save(user);
    return user;
    // return this.userRepository.create(userData).save();
  }
}
