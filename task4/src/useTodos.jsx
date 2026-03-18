import { useReducer, useCallback, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {

    case "add":
      return [...state, action.payload];

    case "remove":
      return state.filter(todo => todo.id !== action.payload);

    case "toggle":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "set":
      return action.payload;

    default:
      return state;
  }
};

export const useTodos = () => {

  const [todos, dispatch] = useReducer(reducer, [], () => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((title) => {
    dispatch({
      type: "add",
      payload: {
        id: Date.now(),
        title,
        completed: false
      }
    });
  }, []);

  const removeTodo = useCallback((id) => {
    dispatch({ type: "remove", payload: id });
  }, []);

  const toggleTodo = useCallback((id) => {
    dispatch({ type: "toggle", payload: id });
  }, []);

  return { todos, addTodo, removeTodo, toggleTodo };
};