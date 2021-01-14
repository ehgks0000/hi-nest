import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { IdUserDto } from './dto/id-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOneByID(@Param('id') userId: number): Promise<User | undefined> {
    return this.userService.findOneByID(userId);
  }

  @Post()
  async create(@Body() userData: CreateUserDto): Promise<User> {
    return await this.userService.create(userData);
  }
}
