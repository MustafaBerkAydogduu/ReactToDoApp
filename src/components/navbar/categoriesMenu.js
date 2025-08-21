import { FiFolderMinus } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState, useContext } from "react";
import CategoryItem from "./categoryItem";
import AddCategory from "./addCategory";
import { AppContext } from "../../context/appContext";


function CategoriesMenu({ isOpen, toggle }) {

  const { categories, setCategories } = useContext(AppContext);

  const [adding, setAdding] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function addCategory(name, color, id) {
    setCategories([...categories, { name, color, id }]);
    setErrorMessage("");
  }

  function onDelete(id) {
    setCategories(categories.filter(category => category.id !== id));
  }

  return (
    <div>

      <div className="navbar-item" onClick={toggle}>
        <FiFolderMinus className="navbar-item-i" />
        <p>Categories</p>
        {isOpen
          ? <IoIosArrowDown style={{ marginLeft: "auto" }} />
          : <IoIosArrowForward style={{ marginLeft: "auto" }} />}
      </div>


      {isOpen && (
        <div className="sub-menu">
          {categories.map((category, index) => (
            <CategoryItem
              id={category.id}
              key={index}
              index={index}
              name={category.name}
              color={category.color}
              onDelete={onDelete}

            />
          ))}

          <AddCategory
            adding={adding}
            setAdding={setAdding}
            addCategory={addCategory}
            categories={categories}
            setErrorMessage={setErrorMessage}
          />
          <p className="category-error-message">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default CategoriesMenu;
