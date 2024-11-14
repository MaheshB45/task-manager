import React from "react";
import TaskItem from "./TaskItem";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TaskList = ({ tasks, onDeleteTask, onToggleCompletion }) => {
  return (
    <TransitionGroup className="mt-4 space-y-2">
      {tasks.map((task) => (
        <CSSTransition
          key={task.id}
          timeout={300}
          classNames="task" // Use the task-* classes for animations
        >
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggleCompletion={onToggleCompletion} // Pass down to TaskItem
        />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TaskList;
