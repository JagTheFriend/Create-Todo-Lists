export interface TodoList {
  content: string;
  dateCreated: string;
  uniqueId: string;
}

export interface User {
  _id: string;
  email: string;
  password: string;
  todoList: TodoList[];
  save: Function;
}
