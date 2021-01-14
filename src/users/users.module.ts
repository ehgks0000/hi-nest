import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/userProfile.entity';
import { Repository } from 'typeorm';
import { UserRepository } from './Repository/UserRepository';
import { UserProfileRepository } from './Repository/UserProfileRepository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, UserProfileRepository])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
