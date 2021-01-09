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

@Controller('movies') // 기본적으로 라우터 // 파라미터가 엔트리 포인트를 제공
export class MoviesController {
  @Get()
  getAll() {
    return 'this is fuck nest';
  }
  @Get('search')
  search(@Query('year') searchinYear: string) {
    return `We are searching for a movie made after ${searchinYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `this is id : ${movieId}`;
  }

  @Post()
  create(@Body('name') name: string) {
    return `this will create movie ${name}`;
  }
  //   @Post()
  //   create(@Body movieData) {
  //     return movieData;
  //   }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `this will delete movie : ${movieId}`;
  }
  @Patch(':id')
  path(@Param('id') movieId: string, @Body() updateData) {
    console.log(updateData);
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
