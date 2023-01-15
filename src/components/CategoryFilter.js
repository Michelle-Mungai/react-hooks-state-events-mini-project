import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  const categorybtns = categories.map((category) => {
    const className = category === selectedCategory ? 'selected' : null;

    return (
      <button key={category} className={className} onClick={() => onCategorySelect(category)} >{category}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
    {categorybtns}
    </div>
  );
}

export default CategoryFilter;
