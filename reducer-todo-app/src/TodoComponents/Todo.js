import React from "react";

const Todo = ({id, task, toggle, completed}) => {
  return (
    <div className={"todo-task" + (completed ? " todo-completed" : "")} onClick={() => toggle(id)}>
      {task}
    </div>
  );
};

export default Todo;