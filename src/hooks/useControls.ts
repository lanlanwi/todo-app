import { useState, useMemo } from 'react';
import type { TodoType, FilterType, SortType } from '../types';

function filterItems(list: TodoType[], filter: FilterType) {
  return list.filter((item) => {
    switch (filter) {
      case 'Active':
        return !item.completed;
      case 'Completed':
        return item.completed;
      default:
        return true;
    }
  });
}

function searchItems(list: TodoType[], text: string) {
  const lower = text.toLowerCase();

  return list.filter((item) => {
    if (!lower) return true;
    const matchSearch = item.text.toLowerCase().includes(lower);
    return matchSearch;
  });
}

const compare = (x: string, y: string): number =>
  x.localeCompare(y, undefined, {
    numeric: true,
    sensitivity: 'base',
  });

function sortItems(list: TodoType[], sort: SortType) {
  return list.slice().sort((a, b) => {
    switch (sort) {
      case 'old':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case 'az':
        return compare(a.text, b.text);
      case 'za':
        return compare(b.text, a.text);
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });
}

function useControls(todos: TodoType[]) {
  const [filter, setFilter] = useState<FilterType>('All');
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<SortType>('new');

  const filteredTodos = useMemo(() => {
    const filteredItems = filterItems(todos, filter);
    const searchResults = searchItems(filteredItems, search);
    const sortedItems = sortItems(searchResults, sort);
    return sortedItems;
  }, [todos, filter, search, sort]);

  /* Actions */
  const handleSetFilter = (val: FilterType) => {
    setFilter(val);
  };

  const handleSetSearch = (val: string) => {
    setSearch(val);
  };

  const handleSetSort = (val: SortType) => {
    setSort(val);
  };

  const isNotFound = filteredTodos.length === 0;

  return {
    filter,
    search,
    sort,
    onSetFilter: handleSetFilter,
    onSetSearch: handleSetSearch,
    onSetSort: handleSetSort,
    filteredTodos,
    isNotFound,
  };
}

export default useControls;
