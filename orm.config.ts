import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'dhfpswl112',
  database: 'hi-nest-test',
  //   entities: [User],
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
