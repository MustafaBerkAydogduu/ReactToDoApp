import React, { useState } from "react";
import { FaRegCircle, FaRegCheckCircle, FaCheck } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import "./taskItem.css";

function TaskItem({ task, taskDelete, taskUpdate, isDoneUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const toggleDone = () => {
    isDoneUpdate(task.id, !task.isDone);
  };

  const saveEdit = () => {
    taskUpdate(task.id, text);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <div className="is-done" onClick={toggleDone}>
        {task.isDone ? <FaRegCheckCircle className="is-done-icon" /> : <FaRegCircle className="is-done-icon" />}
      </div>

      <div className="task-content">
        {isEditing ? (
          <input value={text} onChange={(e) => setText(e.target.value)} />
        ) : (
          <p className={task.isDone ? "done-text" : ""}>{text}</p>
        )}
        <div className="category">
          <span className="dot" style={{ backgroundColor: task.color }}></span>
          {task.category}
        </div>
      </div>

      <div className="task-icon">
        {isEditing ? (
          <FaCheck onClick={saveEdit} style={{ cursor: "pointer" }} />
        ) : (
          <RiPencilFill onClick={() => setIsEditing(true)} style={{ cursor: "pointer" }} />
        )}
        <MdDelete onClick={() => taskDelete(task.id)} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}

export default TaskItem;
