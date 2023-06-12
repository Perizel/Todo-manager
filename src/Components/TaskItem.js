import React from 'react';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { FcUndo } from 'react-icons/fc';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskItem.css';

const TaskItem = ({ task, deleteTask, completeTask, undoTask }) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleUndo = () => {
    undoTask(task.id);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-name">{task.title}</span>
      {!task.completed ? (
        <button className="complete-button" onClick={handleComplete}>
          <BsFillCheckSquareFill />
        </button>
      ) : (
        <button className="undo-button" onClick={handleUndo}>
          <FcUndo />
        </button>
      )}
      <button className="delete-button" onClick={handleDelete}>
        <AiFillDelete />
      </button>
    </li>
  );
};

export default TaskItem;
