import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaTimes } from "react-icons/fa";

function AddCategory({ adding, setAdding, addCategory, categories, setErrorMessage }) {

  const [newCategoryName, setNewCategoryName] = useState("");

  function getRandomColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleAdd() {
    if (newCategoryName.trim() === "") return;

    const exists = categories.find(
      (category) => category.name.toLowerCase() === newCategoryName.toLowerCase()
    );

    if (exists) return setErrorMessage("Category already exists!");


    const color = getRandomColor();
    addCategory(newCategoryName, color, uuidv4());
    setNewCategoryName("");
    setAdding(false);
  }

  if (adding) {
    return (
      <div className="add-category">
        <input
          type="text"
          className="add-input"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); }}
          placeholder="Add new"
          autoFocus
        />
        <FaTimes className="add-category-cancel" onClick={() => {
          setAdding(false)
          setErrorMessage("")
          setNewCategoryName("");
        }
        } style={{ cursor: "pointer" }} />
      </div>
    );
  } else {
    return (
      <div className="sub-item add" onClick={() => setAdding(true)}>
        ＋ Add new
      </div>
    );
  }
}

export default AddCategory;