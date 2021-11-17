import shallow from 'zustand/shallow'

import { useFilterStore } from './state';

export default function TodoListFilters() {
  const [filter, setFilter] = useFilterStore(
    state => [state.filter, state.setFilter],
    shallow
  );

  const updateFilter = ({ target: {value} }) => {
    setFilter(value);
  }

  return (
    <>
      <label>
        Filter:
      </label>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}
