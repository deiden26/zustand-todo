import { useRecoilValue } from "recoil";

import { todoListState } from "./todoListState";

import TodoItemItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats/> *}
      {/* <TodoListFilters/> */}
      <TodoItemItemCreator/>
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item = {todoItem} />
      ))}
    </>
  );
};
