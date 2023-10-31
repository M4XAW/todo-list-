import React from "react";
import { useState } from "react";
import "./todolist.scss";

import Task from "../Task/task";

export default function Todolist() {
  const ls = localStorage;
  const [taskValue, setTaskValue] = useState("");
  const [idValue, setIdValue] = useState(0);

  const addTask = () => {
    if (taskValue.trim() !== "") {
      const currentId = idValue + 1;
      setIdValue(currentId);
      ls.setItem(currentId.toString(), taskValue.trim());
      setTaskValue("");
    }
  };

  return (
    <div className="toDoList">
      <div className="card">
        <h1>To Do List 📝</h1>
        <div className="container">
          <input type="text" placeholder="Ajouter une tâche" value={taskValue} onChange={(e) => setTaskValue(e.target.value)} />
          <button className="add" onClick={() => addTask(taskValue)}>
            Ajouter
          </button>
        </div>
        <div className="tasks">
          <Task />
        </div>
      </div>
    </div>
  );
}
