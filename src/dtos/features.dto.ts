import { IsDateString, IsString, IsUUID } from 'class-validator';

export class CreateNewTodo {
  @IsString()
  public content: string;

  @IsDateString()
  public dateCreated: string;
}

export class DeleteTodo {
  @IsUUID()
  public uniqueId: string;
}

export class UpdatedTodo {
  @IsUUID()
  public uniqueId: string;

  @IsString()
  public content: string;
}
