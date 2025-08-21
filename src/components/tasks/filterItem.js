function FilterItem({ item, setFilter,filter }) {
  return <div className={`filter-item${filter === item ? "-selected" : ""}`} onClick={() => setFilter(item)}>{item}</div>;
}

export default FilterItem;