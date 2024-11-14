import React, { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [title, setTitle] = useState(""); // State to store the task title
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      // Ensure the title is not empty or just spaces
      onAddTask({ title, completed: false, priority, id: Date.now() });
      setTitle(""); // Clear the input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title as the user types
        placeholder="Add a task..."
        className="p-2 border rounded w-full"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
