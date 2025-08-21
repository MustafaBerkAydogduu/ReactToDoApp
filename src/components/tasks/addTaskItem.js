import React, { useState, useContext } from "react";
import { FaRegCircle, FaCheck, FaTimes, FaRegCheckCircle } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../../context/appContext";
import "./addTaskItem.css";

function AddTaskItem({ onClose, onSave }) {
  const { categories } = useContext(AppContext);

  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDone, setIsDone] = useState(false);

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  const handleSave = () => {
    if (!taskText.trim() || !selectedCategory) return;


    const categoryObj = categories.find(c => c.id === selectedCategory);


    onSave({
      id: uuidv4(),
      text: taskText,
      category: categoryObj.name,
      color: categoryObj.color,
      isDone: isDone,
    });

    setTaskText("");
    setSelectedCategory("");
    setIsDone(false);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="is-done">
          {isDone ? (
            <FaRegCheckCircle className="is-done-icon" onClick={toggleDone} />
          ) : (
            <FaRegCircle className="is-done-icon" onClick={toggleDone} />
          )}
        </div>


        <div className="task-content">
          <input
            type="text"
            placeholder="Add a Task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" disabled>Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="task-icon">
          <FaCheck onClick={handleSave} style={{ cursor: "pointer" }} />
          <FaTimes onClick={onClose} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}

export default AddTaskItem;
