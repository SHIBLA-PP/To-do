import React from 'react';

export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 0',
      borderBottom: '1px solid #eee'
    }}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task._id, !task.completed)} />
      <span style={{ flex: 1, textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </li>
  );
}
