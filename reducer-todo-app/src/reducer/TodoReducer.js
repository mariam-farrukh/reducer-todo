export const initialState = {
  todos: [
    {
      task: "Learn about reducers",
      id: 3892987589,
      completed: false
    },
    {
      task: 'Look over training kit',
      completed: true,
      id: 38929875891
    }
  ],
  // task: ''
};
  
export function todoReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: state.todos.concat({
          task: action.payload,
          completed: false,
          id: Date.now()
        }),
        // task: ''
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(({completed}) => !completed)
      };
    
    case "INPUT_TASK":
      return {
        ...state,
        task: action.payload
      }

    default:
      return state;
  }
}