import { selector } from 'recoil';

import { todoListState} from '../state';
import { todoListFilterState } from '../state';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const todoList = get(todoListState);

    switch (filter) {
      case  'Show Completed':
        return todoList.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return todoList.filter((item) => !item.isComplete);
      default:
        return todoList;
    }
  }
});
