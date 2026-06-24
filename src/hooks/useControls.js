import { useState, useMemo } from 'react';



function filterItems(list, filter) {
  if (!list) return [];
  return list.filter(item => {
    if (typeof item?.completed !== "boolean") return false;
    switch (filter) {
      case "All":
        return true;
      case "Active":
        return !item.completed;
      case "Completed":
        return item.completed;
      default:
        return false;
    }
  });
}



function searchItems(list, text) {
  if (!list) return [];

  if (!text) return list;
  const lower = text.toLowerCase();

  return list.filter(item => {
    if (typeof item?.text !== "string") return false;
    const matchSearch = item.text.toLowerCase().includes(lower);
    return matchSearch;
  });
}



function sortItems(list, sort) {
  if (!list) return [];
  return list.slice().sort((a, b) => {
    switch (sort) {
      case "new": case "old":
        const aTime = a?.createdAt ? Date.parse(a.createdAt) : -Infinity;
        const bTime = b?.createdAt ? Date.parse(b.createdAt) : -Infinity;
        return sort === "new"
          ? bTime - aTime
          : aTime - bTime;
      case "az": case "za":
        if (!a?.text || !b?.text) return 0;
        return sort === "az"
          ? a.text.localeCompare(b.text, undefined, {
              numeric: true,
              sensitivity: "base"
            })
          : b.text.localeCompare(a.text, undefined, {
              numeric: true,
              sensitivity: "base"
            });
      default:
        return 0;
    }
  });
}



function useControls(todos) {
  const list = Array.isArray(todos)
    ? todos : [];


  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("New");


  const filteredTodos = useMemo(() => {
    const filteredItems = filterItems(list, filter);
    const searchResults = searchItems(filteredItems, search);
    const sortedItems = sortItems(searchResults, sort);
    return sortedItems;
  }, [list, filter, search, sort]);


  /* Actions */
  const handleSetFilter = (val) => {
    if (typeof val !== "string") return;
    setFilter(val);
  };

  const handleSetSearch = (val) => {
    if (typeof val !== "string") return;
    setSearch(val);
  };

  const handleSetSort = (val) => {
    if (typeof val !== "string") return;
    setSort(val);
  };


  const isNotFound = filteredTodos.length === 0;


  return {
    filter, search, sort,
    onSetFilter: handleSetFilter,
    onSetSearch: handleSetSearch,
    onSetSort: handleSetSort,
    filteredTodos,
    isNotFound
  };
}



export default useControls;