import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const undoTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: false };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="homepage-container">
      <div className="app-container">
        <h1>Perizel Weekly Todo List</h1>
        <TaskForm addTask={addTask} />
      </div>
      <div className="container">
        <div className="task-list-container">
          <h2 className="task-list-heading">Task List</h2>
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            completeTask={completeTask}
            undoTask={undoTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
