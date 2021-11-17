import create from 'zustand'

export const useFilterStore = create((set) => ({
  filter: 'Show All',
  setFilter: (newFilter) => set((state) => ({ filter: newFilter })),
}));
