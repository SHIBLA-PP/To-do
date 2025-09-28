import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ tasks, onToggle, onDelete }) {
  if (!tasks.length) return <p>No tasks yet</p>;
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <TodoItem key={task._id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
