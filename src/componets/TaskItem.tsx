import React from 'react';

interface TaskItemProps {
    task: { id: number; name: string; completed: boolean };
    deleteTask: (id: number) => void;
    toggleTaskCompletion: (id: number) => void;
  }

  const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask,toggleTaskCompletion }) => {
    return (
      <li>
        {task.name}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        <button onClick={() => toggleTaskCompletion(task.id)}>{task.completed? 'Mark as uncompleted' : 'Complete' }</button>
      </li>
    );
  };
  export default TaskItem;
  
