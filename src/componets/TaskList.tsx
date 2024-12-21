import React from 'react';
import TaskItem from './TaskItem';



interface TaskListProps {
    tasks: { id: number; name: string; completed: boolean }[];
    deleteTask: (id: number) => void;
    toggleTaskCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask,toggleTaskCompletion }) => {
    return (
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask}  toggleTaskCompletion={toggleTaskCompletion} />
        ))}
      </ul>
    );
  };
  
  export default TaskList;
