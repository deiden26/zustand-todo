import create from 'zustand'

import { updateTodoInList, removeTodoFromList } from '../helpers';

export const useTodoListStore = create((set, get) => ({
  todoList: [],
  getTodo: (id) => get().todoList.find((todoItem) => todoItem.id === id),
  getFilteredTodoList: (filter) => {
    switch (filter) {
      case  'Show Completed':
        return get().todoList.filter((todo) => todo.isComplete);
      case 'Show Uncompleted':
        return get().todoList.filter((todo) => !todo.isComplete);
      default:
        return get().todoList;
    }
  },
  addTodo: (newTodo) => set((state) => ({
    todoList: [...state.todoList, newTodo],
  })),
  updateTodoItem: (updatedTodo) => set((state) => ({
    todoList: updateTodoInList(state.todoList, updatedTodo),
  })),
  removeTodoItem: (todo) => set((state) => ({
    todoList: removeTodoFromList(state.todoList, todo)
  })),
}));
