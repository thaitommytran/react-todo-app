import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li
      className={`flex justify-between p-4 my-2 capitalize ${
        todo.completed ? "bg-slate-400" : "bg-slate-200"
      }`}>
      <div className="flex">
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={`ml-2 cursor-pointer ${todo.completed && "line-through"}`}>
          {todo.text}
        </p>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="cursor-pointer flex items-center">
        {<FaRegTrashAlt />}
      </button>
    </li>
  );
};

export default Todo;
