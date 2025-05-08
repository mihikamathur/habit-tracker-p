import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ onSelectTab }) {
  return (
    <div className="sidebar-container">
        <button onClick={() => onSelectTab('tasks')} className="sidebar-button">Habit Tracker</button>
      
      <button onClick={() => onSelectTab('journal')} className="sidebar-button">Journal</button>
      <button onClick={() => onSelectTab('summary')} className="sidebar-button">Summary</button>
     
    </div>
  );
}

export default Sidebar;
