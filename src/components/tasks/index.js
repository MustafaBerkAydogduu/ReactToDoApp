import { useState, useEffect, useMemo } from "react";
import { FaFilter } from "react-icons/fa";
import FilterItem from "./filterItem";
import TaskItem from "./taskItem";
import AddTaskItem from "./addTaskItem";
import { VscDiffAdded } from "react-icons/vsc";
import "./index.css";

function Task() {
  const [filter, setFilter] = useState("All");
  const filterList = ["All", "Done", "Not done"];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getTasks = () => {
    const saved = localStorage.getItem("taskList");
    return saved ? JSON.parse(saved) : [];
  };

  const [taskList, setTaskList] = useState(getTasks);

  const filteredTasks = useMemo(() => {
    if (filter === "All") return taskList;
    if (filter === "Done") return taskList.filter(task => task.isDone);
    return taskList.filter(task => !task.isDone);
  }, [taskList, filter]);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);


  // useCallback ile sar
  const taskDelete = (idToDelete) => {
    setTaskList(taskList.filter(task => task.id !== idToDelete));
  };

  const taskUpdate = (idToUpdate, newText) => {
    setTaskList(taskList.map(task => 
      task.id === idToUpdate ? { ...task, text: newText } : task
    ));
  };

  const isDoneUpdate = (idToUpdate, doneStatus) => {
    setTaskList(taskList.map(task =>
      task.id === idToUpdate ? { ...task, isDone: doneStatus } : task
    ));
  };

  return (
    <>
      <div className="header">
        <p>All your tasks</p>
      </div>

      <div className="task-list">
        <div className="task-list-header">
          <p>Tasks</p>
          <div className="filter-items">
            {filterList.map((item, index) => (
              <FilterItem key={index} item={item} filter={filter} setFilter={setFilter} />
            ))}
          </div>
          <FaFilter style={{ fontSize: "24px" }} />
        </div>

        <div className="task-items">
          {filteredTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              taskDelete={taskDelete}
              taskUpdate={taskUpdate}
              isDoneUpdate={isDoneUpdate}
            />
          ))}
        </div>

        <div className="add-task" onClick={() => setIsModalOpen(true)}>
          <VscDiffAdded className="add-task-icon" />
          <p>Add a task</p>
        </div>

        {isModalOpen && (
          <AddTaskItem
            onClose={() => setIsModalOpen(false)}
            onSave={(newTask) =>
              setTaskList([...taskList, newTask])
            }
          />
        )}
      </div>
    </>
  );
}

export default Task;
