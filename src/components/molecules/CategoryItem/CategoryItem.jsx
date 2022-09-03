import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <>
      <div className="category item">
        <div className="content">
          <div className="header">{category.name}</div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
