import { memo, useCallback } from 'react';

import { useTodoListStore } from './state'

export default memo(function TodoItem({todoId}) {
  const todo = useTodoListStore(useCallback(
    (state) => state.getTodo(todoId),
    [todoId]
  ));
  const updateTodoItem = useTodoListStore(state => state.updateTodoItem);
  const removeTodoItem = useTodoListStore(state => state.removeTodoItem);


  const editItemText = ({ target: {value} }) => {
    updateTodoItem({
      ...todo,
      text: value,
    });
  }

  const toggleItemCompletion = () => {
    updateTodoItem({
      ...todo,
      isComplete: !todo.isComplete,
    });
  };

  const deleteItem = () => {
    removeTodoItem(todo);
  }

  console.log(`Rendering: ${todo.text}`)

  return (
    <div>
      <input type="text" value={todo.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
})
