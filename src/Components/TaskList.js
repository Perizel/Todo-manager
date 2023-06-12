import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, deleteTask, completeTask, undoTask }) => {
  return (
    <div className="task-list-container">
      {/* <h2 className="task-list-heading">Task List Items</h2> */}
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
            undoTask={undoTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
