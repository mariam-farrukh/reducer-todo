import React, { useState, useReducer } from "react";
import TodoList from "./TodoComponents/TodoList";
import TodoForm from "./TodoComponents/TodoForm";
import { initialState, todoReducer } from './reducer/TodoReducer.js'
import "./TodoComponents/Todo.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("state inside App", state.todoData);

  const clearTodos = () => {
    dispatch({ type: "clearTodo" });
  };

  const handleChange = event => {
    event.preventDefault();
    dispatch({
      type: "field",
      field: "task",
      value: event.target.value
    });
  };

  const addTodos = event => {
    event.preventDefault();
    dispatch({ type: "addTodo" });
  };

  const deleteItem = id => {
    console.log("deleted");
    const filteredItems = state.todoData.filter(item => {
      return item.id !== id;
    });
    state.todoData = filteredItems;
    console.log(state.todoData);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <TodoList toDoList={state.todoData} deleteItem={deleteItem} />
      <TodoForm
        clear={clearTodos}
        add={addTodos}
        toDoList={state.todoData}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;