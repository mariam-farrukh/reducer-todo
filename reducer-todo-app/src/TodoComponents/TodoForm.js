import React from 'react';

const TodoForm = ({addTodo, clear, task, handleTask}) => {
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(task);
  };
  const handleClear = event => {
    event.preventDefault();
    clear();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             name="task"
             placeholder="new todo"
             onChange={handleTask}
             value={task} />
      <div className="todo-form-buttons">
        <button className="todo-add" type="submit">Add</button>
        <button className="todo-clear" onClick={handleClear}>Clear</button>
      </div>
    </form>
  );
};

export default TodoForm;