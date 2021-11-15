export function getItemIndex(todoList, itemId) {
  return todoList.findIndex(item => item.id === itemId);
}

export function updateListItem(todoList, item) {
  const index = getItemIndex(todoList, item.id)
  return [...todoList.slice(0, index), item, ...todoList.slice(index + 1)];
}

export function removeListItem(todoList, item) {
  const index = getItemIndex(todoList, item.id)
  return [...todoList.slice(0, index), ...todoList.slice(index + 1)];
}
