import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDeleteTask, onToggleCompletion }) => {
  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggleCompletion={onToggleCompletion} // Pass down to TaskItem
        />
      ))}
    </div>
  );
};

export default TaskList;
