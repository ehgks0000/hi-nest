import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'src/orm.config';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env', isGlobal: true }),
    MoviesModule,
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot(config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  //Once this is done, the TypeORM Connection and EntityManager objects
  //will be available to inject across the entire project
  //(without needing to import any modules)
  constructor(private connection: Connection) {}
}
