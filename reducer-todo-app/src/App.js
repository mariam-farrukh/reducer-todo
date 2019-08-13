import React, {useReducer} from "react";
import TodoList from "./TodoComponents/TodoList";
import TodoForm from "./TodoComponents/TodoForm";
import { initialState, todoReducer } from './reducer/TodoReducer.js'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const toggle = id => dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  const addTodo = task => dispatch({ type: "ADD_TODO", payload: task });
  const clear = () => dispatch({ type: "CLEAR_COMPLETED" });
  const handleTask = event => dispatch({ type: "INPUT", payload: event.target.value });

  return (
    <div className="App">
      <h3>Todo List</h3>
        <div className="todo-body">
          <TodoForm addTodo={addTodo} clear={clear} handleTask={handleTask}/>
          <TodoList todos = {state.todos} toggle={toggle} />
        </div>
    </div>
  );
}

export default App;