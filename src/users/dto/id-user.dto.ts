import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class IdUserDto extends PartialType(CreateUserDto) {}
