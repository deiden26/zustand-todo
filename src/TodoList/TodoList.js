import { useRecoilValue } from "recoil";

import { filteredTodoListState } from "./selectors/filteredTodoListState";

import TodoItem from "./TodoItem";
import TodoItemItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      {/* <TodoListStats/> */}
      <TodoListFilters />
      <TodoItemItemCreator/>
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item = {todoItem} />
      ))}
    </>
  );
};
