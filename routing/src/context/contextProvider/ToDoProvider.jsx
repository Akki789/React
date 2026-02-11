import React, { useEffect, useMemo, useState } from "react";
import { ToDoContext } from "../contextCreation/ToDoContext";

export default function ToDoProvider({ children }) {
  const [toDos, setToDos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setToDos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  let filtered = useMemo(() => {
    return toDos.filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "uncompleted") return !todo.completed;
      return toDos;
    });
  }, [toDos, filter]);

  return (
    <div>
      <ToDoContext.Provider value={{  toDos, filtered, filter, setFilter, loading }}>
        {children}
      </ToDoContext.Provider>
    </div>
  );
}
