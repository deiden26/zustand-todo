import { selector, selectorFamily } from 'recoil';

import { todoListState } from '../state';

export const getTodoItemById = selectorFamily({
  key: 'getTodoItemById',
  get: id => ({ get }) => {
    const todoList = get(todoListState);
    return todoList[getItemIndex(todoList, id)];
  },
});

export const updateTodoItemSetter = selector({
  key: 'updateTodoItem',
  get: () => ThrowSetterOnly,
  set: ({ set, get }, updatedTodo) => {
    const todoList = get(todoListState);
    set(todoListState, updateListItem(todoList, updatedTodo));
  },
});

export const removeTodoItemSetter = selector({
  key: 'removeTodoItem',
  get: () => ThrowSetterOnly,
  set: ({ set, get }, todo) => {
    const todoList = get(todoListState);
    set(todoListState, removeListItem(todoList, todo));
  },
});

function getItemIndex(todoList, itemId) {
  return todoList.findIndex(item => item.id === itemId);
}

function updateListItem(todoList, item) {
  const index = getItemIndex(todoList, item.id)
  return [...todoList.slice(0, index), item, ...todoList.slice(index + 1)];
}

function removeListItem(todoList, item) {
  const index = getItemIndex(todoList, item.id)
  return [...todoList.slice(0, index), ...todoList.slice(index + 1)];
}

function ThrowSetterOnly() {
    throw new Error('Setter Only');
}
