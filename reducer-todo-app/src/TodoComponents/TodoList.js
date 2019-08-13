import React from 'react';
import Todo from './Todo.js';

const TodoList = ({ todos, toggleCompleted }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => <Todo key={todo.id} {...todo} toggleCompleted={toggleCompleted} />)}
    </div>
  );
};

export default TodoList;