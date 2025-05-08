import React from 'react';
import '../styles/SidebarSummary.css';

function Summary({ tasks }) {
  const allTasks = Object.values(tasks).flat();
  const completedCount = allTasks.filter(task => task.completed).length;
  const totalCount = allTasks.length;
  const progress = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;

  // Dummy streak count (you can enhance this logic later)
  const streakCount = completedCount >= 1 ? '🔥 1 day' : '🧊 0 days';

  return (
    <div className="sidebar-summary">
      <h3 className="sidebar-title">📊 Daily Summary</h3>
      <p>Total Tasks Today: <strong>{totalCount}</strong></p>
      <p>% Completed: <strong>{progress}%</strong></p>
      <p>Streaks: <strong>{streakCount}</strong></p>

      <div className="quick-links">
        
        {/* <ul>
          <li><a href="#">📅 Today</a></li>
          <li><a href="#">📈 Weekly Stats</a></li>
          <li><a href="#">➕ Add Habit</a></li>
        </ul> */}
      </div>
    </div>
  );
}

export default Summary;
