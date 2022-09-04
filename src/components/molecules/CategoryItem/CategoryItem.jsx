import { useStore } from "../../../store/store";

const CategoryItem = ({ category }) => {
  const { selectedCategory, setSelectedCategory } = useStore();

  const handleClick = () => {
    setSelectedCategory(category.id);
  };

  return (
    <>
      <div className="category item" onClick={() => handleClick()}>
        <div className="content">
          <div
            style={{
              color: category.id === selectedCategory ? "green" : "black",
            }}
            className="header"
          >
            {category.name}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
