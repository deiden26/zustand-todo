import { useRecoilState } from 'recoil';

import { todoListState } from './state';

export default function TodoItem({itemId}) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const item = todoList[getItemIndex(todoList, itemId)];

  const editItemText = ({ target: {value} }) => {
    const newList = updateItem(todoList, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  }

  const deleteItem = () => {
    const newList = removeItem(todoList, item);

    setTodoList(newList);
  }

  const toggleItemCompletion = () => {
    const newList = updateItem(todoList, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

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
}

function getItemIndex(todoList, itemId) {
  return todoList.findIndex(item => item.id === itemId);
}

function updateItem(todoList, item) {
  const index = getItemIndex(todoList, item.id)
  return [...todoList.slice(0, index), item, ...todoList.slice(index + 1)];
}

function removeItem(todoList, item) {
  const index = getItemIndex(todoList, item.id)
  return [...todoList.slice(0, index), ...todoList.slice(index + 1)];
}
