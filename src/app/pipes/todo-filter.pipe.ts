import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo/todo';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[], filterText: string): Todo[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';

    return filterText
      ? todos.filter(
          (t: Todo) => t.title.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : todos;
  }

}
