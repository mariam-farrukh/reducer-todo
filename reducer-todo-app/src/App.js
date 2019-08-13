import React, { useState, useReducer } from "react";
import TodoList from "./TodoComponents/TodoList";
import TodoForm from "./TodoComponents/TodoForm";
import { initialState, todoReducer } from './reducer/TodoReducer.js'
import "./TodoComponents/Todo.css";

function App() {
  // Initialize useReducer
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Setup Functions that run dispatch which will be used to trigger actions and pass in parameters with payload
  const toggleCompleted = id =>
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  const addTodo = task => dispatch({ type: "ADD_TODO", payload: task });
  const clear = () => dispatch({ type: "CLEAR" });
  const handleChange = event =>
    dispatch({ type: "UPDATE", payload: event.target.value });

  return (
    <div className="App">
      <h1>Repeating step 1</h1>
    </div>
  );
}

export default App;