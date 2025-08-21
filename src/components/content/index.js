import "./index.css";
import Task from "../tasks";

import { Routes, Route } from "react-router-dom"; 
function Content() {
  return (
    // useCallbacki araştır hangi durumlarda kullanılır ona göre ekle
    <div className="content-container">
      <Routes>
        <Route path="/" element={<Task />} /> 
        <Route path="/tasks" element={<Task />} />

        <Route
          path="/settings"
          element={
            <div className="header">
              <p>Settings Content</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Content;
