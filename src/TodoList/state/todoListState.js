import create from 'zustand'

import { updateListItem, removeListItem } from '../helpers';

export const useTodoListStore = create((set, get) => ({
  todoList: [],
  getTodo: (id) => get().todoList.find((todoItem) => todoItem.id === id),
  getFilteredTodoList: (filter) => {
    switch (filter) {
      case  'Show Completed':
        return get().todoList.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return get().todoList.filter((item) => !item.isComplete);
      default:
        return get().todoList;
    }
  },
  addTodo: (newTodo) => set((state) => ({
    todoList: [...state.todoList, newTodo],
  })),
  updateTodoItem: (updatedTodo) => set((state) => ({
    todoList: updateListItem(state.todoList, updatedTodo),
  })),
  removeTodoItem: (todo) => set((state) => ({
    todoList: removeListItem(state.todoList, todo)
  })),
}));
