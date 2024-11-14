import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("title"); // for sorting by title, priority, or completion

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);

  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((task) => task.id !== id));

  const toggleCompletion = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "priority") return a.priority - b.priority;
      if (sortOption === "completed") return a.completed - b.completed;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 mb-4 border rounded w-full"
      />
      <TaskInput onAddTask={addTask} />
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="p-2 mb-4 border rounded"
      >
        <option value="title">Sort by Title</option>
        <option value="priority">Sort by Priority</option>
        <option value="completed">Sort by Completed</option>
      </select>

      <TaskList
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onToggleCompletion={toggleCompletion} // Pass toggleCompletion here
      />
    </div>
  );
};

export default App;
