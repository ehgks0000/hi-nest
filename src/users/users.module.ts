import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/userProfile.entity';
import { Repository } from 'typeorm';
import { UserRepository } from './UserRepository';
import { UserProfileRepository } from './UserProfileRepository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, UserProfileRepository])],
  providers: [UsersService, Repository],
  controllers: [UsersController],
})
export class UsersModule {}
