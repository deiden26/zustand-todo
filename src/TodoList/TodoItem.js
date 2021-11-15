import { memo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { getTodoItemById } from './selectors'
import {
  updateTodoItemSetter,
  removeTodoItemSetter,
} from './setters';

export default memo(function TodoItem({itemId}) {
  const item = useRecoilValue(getTodoItemById(itemId));
  const updateTodoItem = useSetRecoilState(updateTodoItemSetter);
  const removeTodoItem = useSetRecoilState(removeTodoItemSetter);


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
