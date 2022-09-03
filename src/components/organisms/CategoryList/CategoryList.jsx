import React from "react";
import CategoryItem from "../../molecules/CategoryItem/CategoryItem";

const CategoryList = ({ categories }) => {
  return (
    <>
      <div className="four wide column">
        <h3 className="ui dividing header">Categories</h3>
        <div className="ui selection animated list category items">
          {categories &&
            categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
