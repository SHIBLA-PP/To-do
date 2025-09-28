import React, { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim());
    setTitle('');
  };
  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Add a task" style={{ flex: 1, padding: 8 }} />
      <button type="submit">Add</button>
    </form>
  );
}
