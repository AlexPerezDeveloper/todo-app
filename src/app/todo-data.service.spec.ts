/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';


@Injectable()
export class TodoDataService{
  //placeholder for las id so we can simulate
  //automatic incrementing od id's

  lastId: number=0;

  // Placeholder for todo's
  todos: Todo[] = [];
  constructor(){

  }

  //Simulate POST /todos
  addTodo(todo: Todo): TodoDataService{
    if(!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }
  //Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService{
    this.todos = this.todos
      .filter(todo => todo.id !== id);
      return this;
  }
}


describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));
});
