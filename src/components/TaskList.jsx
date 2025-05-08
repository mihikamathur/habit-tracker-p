import React, { useState } from 'react';
import TaskItem from './TaskItem';
import ProgressBar from './ProgressBar';
import '../styles/TaskList.css';

const initialCategories = {
  Fitness: [],
  Personal: [],
  Educational: [],
  Lifestyle: [],
};

const categoryColors = {
  Fitness: '#A5D6A7',       // Amber
  Personal: '#A5D6A7',      // Light Blue
  Educational: '#A5D6A7',   // Light Green
  Lifestyle: '#A5D6A7',     // Pink
};

function TaskList() {
  const [tasks, setTasks] = useState(initialCategories);
  const [newTask, setNewTask] = useState('');
  const [category, setCategory] = useState('Fitness');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks(prev => ({
        ...prev,
        [category]: [...prev[category], { name: newTask, completed: false }],
      }));
      setNewTask('');
    }
  };

  const toggleTask = (cat, index) => {
    setTasks(prev => ({
      ...prev,
      [cat]: prev[cat].map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  return (
    <div className="tasklist-container">
      <h2 className="section-title">Habit Tasks</h2>
      <div className="task-form">
        <input
          className="task-input"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="New Task"
        />
        <select
          className="task-category-dropdown"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {Object.keys(tasks).map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <button onClick={addTask} className="add-task-button">Add</button>
      </div>

      <div className="category-grid">
        {Object.entries(tasks).map(([cat, catTasks]) => {
          const completedCount = catTasks.filter(t => t.completed).length;
          const progress = catTasks.length ? (completedCount / catTasks.length) * 100 : 0;

          return (
            <div
              key={cat}
              className="category-box"
              style={{ backgroundColor: categoryColors[cat] || '#f0f0f0' }}
            >
              <h3 className="category-title">{cat}</h3>
              {catTasks.map((task, i) => (
                <TaskItem key={i} task={task} onClick={() => toggleTask(cat, i)} />
              ))}
              <ProgressBar progress={progress} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskList;
