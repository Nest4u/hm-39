import { useState } from 'react'

import TaskList from './componets/TaskList';
import './App.css'

function App() {
  interface Task {
    id: number;
    name: string;
    completed: boolean;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput]  = useState<string>('');
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), name: taskInput, completed: false }]);
      setTaskInput('');
    }
  }
  const removeTask = (id:number):void => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  const toggleTaskCompletion = (id:number):void => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
      
    }));
  }
  const uncompletedTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);
  return (
    <>
      <div>
        <h1>Task count</h1>
        <input type="text" value={taskInput} onChange={(e)=> setTaskInput(e.target.value)} placeholder='Add new task' />
        <button onClick={addTask}>Add Task</button>
        <h2>Uncompleted Tasks: {uncompletedTasks.length}</h2>
      <TaskList
        tasks={uncompletedTasks}
        deleteTask={removeTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />

      <h2>Completed Tasks: {completedTasks.length}</h2>
      <TaskList
        tasks={completedTasks}
        deleteTask={removeTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
      </div>
    
    </>
  )
}

export default App
