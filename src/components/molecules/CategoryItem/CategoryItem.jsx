import { useStore } from "../../../store/store";

const CategoryItem = ({ category }) => {
  const { setSelectedCategory } = useStore();

  const handleClick = () => {
    setSelectedCategory(category.id);
  };

  return (
    <>
      <div className="category item" onClick={() => handleClick()}>
        <div className="content">
          <div className="header">{category.name}</div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
