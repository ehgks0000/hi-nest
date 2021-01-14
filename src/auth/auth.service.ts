import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log('asdf');

    if (user && bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
