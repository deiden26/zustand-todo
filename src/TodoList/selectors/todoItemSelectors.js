import { selectorFamily } from 'recoil';

import { todoListState } from '../state';
import { getItemIndex } from '../helpers';

export const getTodoItemById = selectorFamily({
  key: 'getTodoItemById',
  get: id => ({ get }) => {
    const todoList = get(todoListState);
    return todoList[getItemIndex(todoList, id)];
  },
});
