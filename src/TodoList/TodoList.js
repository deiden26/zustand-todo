import { useCallback } from 'react';
import { useTodoListStore, useFilterStore } from './state';

import TodoItem from "./TodoItem";
import TodoItemItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";

export default function TodoList() {
  const filter = useFilterStore((state) => state.filter);
  const todoList = useTodoListStore(useCallback(
    (state) => state.getFilteredTodoList(filter),
    [filter]
  ));

  return (
    <>
      {/* <TodoListStats/> */}
      <TodoListFilters />
      <TodoItemItemCreator/>
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} todoId={todoItem.id} />
      ))}
    </>
  );
};
