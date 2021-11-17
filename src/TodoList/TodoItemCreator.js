import { useState } from 'react';

import { useTodoListStore } from './state'

export default function TodoItemItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const addTodo = useTodoListStore((state) => state.addTodo);

  const addNewTodo = () => {
    addTodo({
      id: getId(),
      text: inputValue,
      isComplete: false,
    });
    setInputValue('');
  };

  const onChange = ({ target: {value} }) => {
    setInputValue(value);
  };

  return (
    <form onSubmit={(event) => { event.preventDefault(); addNewTodo(); }}>
      <input type="text" value={inputValue} onChange={onChange} />
      <input type="submit" value="Add" />
    </form>
  );
}

let id = 0;
function getId() {
  return id++;
}

