import React from 'react';
import '../styles/TaskItem.css';

function TaskItem({ task, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`task-item ${task.completed ? 'task-completed' : ''}`}
    >
      {task.name}
    </div>
  );
}

export default TaskItem;
