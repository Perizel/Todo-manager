import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newTask = {
        id: new Date().getTime().toString(),
        title: task,
        completed: false,
      };
      addTask(newTask);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control task-input"
          placeholder="Enter today's task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
