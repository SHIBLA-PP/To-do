import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      alert('Could not load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const addTask = async (title) => {
    try {
      const res = await axios.post(`${API}/tasks`, { title });
      setTasks(prev => [res.data, ...prev]);
    } catch (err) { console.error(err); }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const res = await axios.put(`${API}/tasks/${id}`, { completed });
      setTasks(prev => prev.map(t => t._id === id ? res.data : t));
    } catch (err) { console.error(err); }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/tasks/${id}`);
      setTasks(prev => prev.filter(t => t._id !== id));
    } catch (err) { console.error(err); }
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 20 }}>
      <h1>Simple MERN Todo</h1>
      <TodoForm onAdd={addTask} />
      {loading ? <p>Loading...</p> : <TodoList tasks={tasks} onToggle={toggleComplete} onDelete={deleteTask} />}
    </div>
  );
}
