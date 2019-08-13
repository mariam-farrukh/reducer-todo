import React, { useState, useReducer } from "react";
import TodoList from "./TodoComponents/TodoList";
import TodoForm from "./TodoComponents/TodoForm";
import { initialState, todoReducer } from './reducer/TodoReducer.js'
import "./TodoComponents/Todo.css";

function App() {
  // Initialize useReducer
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const toggleCompleted = id => dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  const addTodo = task => dispatch({ type: "ADD_TODO", payload: task });
  const clear = () => dispatch({ type: "CLEAR_COMPLETED" });

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} clear={clear} />
      <TodoList todos = {state.todos} toggle={toggle} />
    </div>
  );
}

export default App;