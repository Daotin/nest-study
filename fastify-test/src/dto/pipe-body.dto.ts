import { IsString, IsNumber, IsArray, IsInt } from 'class-validator';
export class PipeBodyDto {
  @IsString()
  name: string;
  @IsInt()
  age: number;
  @IsArray()
  @IsString({ each: true })
  hobbies: string[];
}
