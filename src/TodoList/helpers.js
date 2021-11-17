export function getTodoIndex(todoList, todoId) {
  return todoList.findIndex(todo => todo.id === todoId);
}

export function updateTodoInList(todoList, todo) {
  const index = getTodoIndex(todoList, todo.id)
  return [...todoList.slice(0, index), todo, ...todoList.slice(index + 1)];
}

export function removeTodoFromList(todoList, todo) {
  const index = getTodoIndex(todoList, todo.id)
  return [...todoList.slice(0, index), ...todoList.slice(index + 1)];
}
