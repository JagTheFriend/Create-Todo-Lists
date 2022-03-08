import { IsDateString, IsString } from 'class-validator';

export class CreateNewTodo {
  @IsString()
  public content: string;

  @IsDateString()
  public dateCreated: string;
}
