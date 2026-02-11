import React, { useContext, useEffect, useState } from "react";
import { ToDoContext } from "../context/contextCreation/ToDoContext";

export default function ToDo() {
    const { filtered, setFilter, loading } =
    useContext(ToDoContext);
  
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Todo List</h1>

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>
        Completed
      </button>
      <button onClick={() => setFilter("uncompleted")}>
        Uncompleted
      </button>

      <ul>
        {filtered.map((todo) => (
          <li key={todo.id}>
            {todo.title} —{" "}
            {todo.completed ? "✅ Completed" : "❌ Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}
