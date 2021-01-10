import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}

// 부분 타입 (partial types)
//-------------------------------

// dtd 프로그래머로서 코드를 더 간결하게 만들 수 있도록 해준다
//그리고 nestJS에 들어오는 쿼리에 대해 유효성을 검사해줌

//dto와 class-validator로 유효성 검사
