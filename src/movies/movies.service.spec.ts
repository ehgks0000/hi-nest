import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //   it('should be 4', () => {
  //     expect(2 + 2).toEqual(4);
  //   });

  describe('getAll', () => {
    //유닛테스트
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });
  describe('getOne', () => {
    //유닛테스트
    it('should return a movie', () => {
      service.create({
        title: 'test Movie',
        genres: ['test'],
        year: 2000,
      });
      const moive = service.getOne(1);
      expect(moive).toBeDefined();
      expect(moive.id).toEqual(1);
    });
    it('should thorw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`movie with id 999 not found`);
      }
    });
  });
  describe('deleteOne', () => {
    //유닛테스트
    it('delete a moive', () => {
      service.create({
        title: 'test movie',
        genres: ['test'],
        year: 2021,
      });
      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;

      expect(afterDelete).toBeLessThan(beforeDelete);
      //   expect(afterDelte.length).toEqual(allMovies.length - 1);
    });
    it('shoudl return a 404', () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('create', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'test moive',
        genres: ['testtest'],
        year: 2222,
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });
  describe('update', () => {
    it('should update a movie', () => {
      service.create({
        title: 'test moive',
        genres: ['testtest'],
        year: 2222,
      });
      service.update(1, { title: 'updated Test' });
      const movie = service.getOne(1);
      expect(movie.title).toEqual('updated Test');
    });
    it('should throw a NotFoundException', () => {
      try {
        service.update(999, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
