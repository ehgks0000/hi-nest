import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Profile } from './entities/userProfile.entity';
import { UserProfileRepository } from './Repository/UserProfileRepository';
import { UserRepository } from './Repository/UserRepository';

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

  async findOne(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ username });
    // return this.users.find((user) => user.username === username);
  }

  findOneByID(userID: number): Promise<User> {
    console.log(userID);
    return this.userRepository.findOne({ id: userID });
  }

  async create(userData: CreateUserDto): Promise<User> {
    const { email, username, password } = userData;

    const user = new User();
    user.email = email;
    user.password = password;
    user.username = username;

    await this.userRepository.save(user);
    user.password = undefined;
    console.log(user);

    return user;
    // return this.userRepository.create(userData).save();
  }
}
