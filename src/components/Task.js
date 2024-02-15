import React, { useState } from "react";



function Task({text, category, removeTask, id}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => removeTask(id)}>X</button>
    </div>
  );
}

export default Task;
