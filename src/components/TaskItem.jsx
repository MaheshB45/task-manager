import React from "react";

const TaskItem = ({ task, onDelete, onToggleCompletion }) => {
  return (
    <div
      className={`flex justify-between items-center p-2 rounded mb-2 
      ${task.completed ? "bg-green-100 line-through" : "bg-gray-100"}`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
        />
        <span>
          {task.title} - {task.priority}
        </span>
      </div>
      <button onClick={() => onDelete(task.id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
