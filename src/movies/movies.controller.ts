import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // 기본적으로 라우터 // 파라미터가 엔트리 포인트를 제공
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    //   getAll(@Req() req): Movie[] {  // NestJS는 익스프레스 프레임웍위에서 돌아가기 때문에 이렇게 사용가능하지만
    //fatify사용이 더좋다 익스보다 2배 빠름
    return this.movieService.getAll();
    // return 'this is fuck nest';
  }
  //   @Get('search')
  //   search(@Query('year') searchinYear: string) {
  //     return `We are searching for a movie made after ${searchinYear}`;
  //   }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    // validator의 transform으로 인해 스트링이 넘버로 변환
    return this.movieService.getOne(movieId);
    // return `this is id : ${movieId}`;
  }

  //   @Post()
  //   create(@Body('name') name: string) {
  //     return `this will create movie ${name}`;
  //   }
  @Post()
  create(@Body() movieData: CreateMovieDto) {
    // console.log(movieData);
    return this.movieService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.movieService.deleteOne(movieId);
  }
  @Patch(':id')
  pacth(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.movieService.update(movieId, updateData);
  }
}
