import { setter } from 'setter';

import { todoListState } from '../state';
import { updateListItem, removeListItem } from '../helpers';

export const updateTodoItemSetter = setter({
  key: 'updateTodoItem',
  set: ({ set, get }, updatedTodo) => {
    const todoList = get(todoListState);
    set(todoListState, updateListItem(todoList, updatedTodo));
  },
});

export const removeTodoItemSetter = setter({
  key: 'removeTodoItem',
  set: ({ set, get }, todo) => {
    const todoList = get(todoListState);
    set(todoListState, removeListItem(todoList, todo));
  },
});
