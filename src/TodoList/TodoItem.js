import { memo, useCallback } from 'react';

import { useTodoListStore } from './state'

export default memo(function TodoItem({todoId}) {
  const item = useTodoListStore(useCallback(
    (state) => state.getTodo(todoId),
    [todoId]
  ));
  const updateTodoItem = useTodoListStore(state => state.updateTodoItem);
  const removeTodoItem = useTodoListStore(state => state.removeTodoItem);


  const editItemText = ({ target: {value} }) => {
    updateTodoItem({
      ...item,
      text: value,
    });
  }

  const toggleItemCompletion = () => {
    updateTodoItem({
      ...item,
      isComplete: !item.isComplete,
    });
  };

  const deleteItem = () => {
    removeTodoItem(item);
  }

  console.log(`Rendering: ${item.text}`)

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
})
