import React from 'react'

const TodoItem = ({todo, onToggle, onDelete}) => {
  console.log("Todo Component rendered")
  return (
        <div
            className="flex bg-slate-200 w-100 rounded-xl p-3 text-black justify-between items-center"
          >

            <div className="flex items-center gap-4">

              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="size-5 accent-green-600"
              />

              <span className={todo.completed ? "line-through text-gray-500" : "text-black"}>
                {todo.title}
              </span>

            </div>

            <button
              onClick={() => onDelete(todo.id)}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Delete
            </button>

          </div>
  )
}

export default React.memo(TodoItem)
