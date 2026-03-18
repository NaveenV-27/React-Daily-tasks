import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useTodos } from "./useTodos";
import TodoItem from "./TodoItem";

function App() {

  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();

  // const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = useCallback(() => {
    // if (!input.trim()) return;
    const newTodo = inputRef.current.value;
    if (!newTodo.trim()) return;
    addTodo(newTodo);
    inputRef.current.value = "";
    // setInput("");
    inputRef.current.focus();
  }, [addTodo]);

  const handleToggle = useCallback((id) => {
    toggleTodo(id);
  }, [toggleTodo]);

  const handleDelete = useCallback((id) => {
    removeTodo(id);
  }, [removeTodo]);

  const filteredTodos = useMemo(() => {
    // console.log("useMemo worked")
    switch (filter) {
      case "completed":
        return todos.filter(t => t.completed);
      case "pending":
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const completedCount = todos.filter(t => t.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <h1 className="text-center py-4 text-4xl font-bold bg-gray-800">
        Todo Manager
      </h1>

      {/* INPUT */}
      <div className="flex justify-center mt-10 gap-3">
        <input
          ref={inputRef}
          // value={input}
          // onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo..."
          className="px-4 py-2 rounded-lg text-black bg-slate-300"
        />

        <button
          onClick={handleAdd}
          className="bg-green-600 px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded cursor-pointer ${
              filter === "all" ? "bg-blue-600" : "bg-gray-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-3 py-1 rounded cursor-pointer ${
              filter === "completed" ? "bg-blue-600" : "bg-gray-600"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-3 py-1 rounded cursor-pointer ${
              filter === "pending" ? "bg-blue-600" : "bg-gray-600"
            }`}
          >
            Pending
          </button>
      </div>

      <div className="text-center mt-4">
        {completedCount} Completed | {pendingCount} Pending
      </div>

      <div className="flex items-center mt-10 flex-col gap-4">

        {filteredTodos.length === 0 && <div>
          No {filter == "all" ? "" : filter} todos to show
        </div> }

        {filteredTodos.map(todo => (
          <TodoItem todo={todo} onDelete={handleDelete} onToggle={handleToggle} />
        ))}

      </div>
    </div>
  );
}

export default App;