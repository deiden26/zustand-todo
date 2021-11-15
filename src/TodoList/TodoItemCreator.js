import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { todoListState } from './state'

export default function TodoItemItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      }
    ]);
    setInputValue('');
  };

  const onChange = ({ target: {value} }) => {
    setInputValue(value);
  };

  return (
    <form onSubmit={(event) => { event.preventDefault(); addItem(); }}>
      <input type="text" value={inputValue} onChange={onChange} />
      <input type="submit" value="Add" />
    </form>
  );
}

let id = 0;
function getId() {
  return id++;
}

