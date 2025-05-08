import React from 'react';
import '../styles/ProgressBar.css';

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ProgressBar;
