import React from "react";
import "./task.scss";

export default function task() {
  const ls = localStorage;
  const toDoList = Object.keys(ls);

  const clearTask = (key) => {
    ls.removeItem(key);
  };

  return (
    <>
      {toDoList.length === 0 ? (
        <p>Votre liste est vide</p>
      ) : (
        <ul>
          {Object.keys(ls).map((key) => (
            <li>
              {key} : {ls.getItem(key)}
              <button className="clearTask" onClick={() => clearTask(key)}></button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
