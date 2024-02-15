import React from "react";
import Task from "./Task"

function TaskList({tasks, removeTask}) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (<Task
          key={index}
          text={task.text}
          category={task.category}
          deleteTask={() => removeTask(index)}>
           </Task>)
      })}
    </div>
  );
}


export default TaskList;
