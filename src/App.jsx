import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import Journal from './components/Journal';
import Summary from './components/Summary';
import './styles/App.css';

const initialCategories = {
  Fitness: [],
  Personal: [],
  Educational: [],
  Lifestyle: [],
};

function App() {
  const [selectedTab, setSelectedTab] = useState('tasks');
  const [tasks, setTasks] = useState(initialCategories);

  return (
    <div className="app-container">
      <Sidebar onSelectTab={setSelectedTab} />
      {selectedTab === 'tasks' && <TaskList tasks={tasks} setTasks={setTasks} />}
      {selectedTab === 'journal' && <Journal />}
      {selectedTab === 'summary' && <Summary tasks={tasks} />}
    </div>
  );
}

export default App;
