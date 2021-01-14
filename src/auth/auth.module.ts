import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './passport/google.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'src/orm.config';
import { User } from '../users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Profile } from 'src/users/entities/userProfile.entity';
import { Repository } from 'typeorm';
import { UserRepository } from 'src/users/Repository/UserRepository';
import { UserProfileRepository } from 'src/users/Repository/UserProfileRepository';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './passport/local.strategy';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, GoogleStrategy, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
