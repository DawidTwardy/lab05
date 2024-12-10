import React, { useEffect, useState } from 'react';
import './App.scss';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';
import useCompletedTasks from './hooks/useCompletedTasks';
import useCompletionPercentage from "./hooks/usePrecentTask";
import TaskFilter from './TaskList/TaskFilter';
import useIncompleteTasks from './hooks/useIncompletedTast';


export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState<string>('all');

  const completedTasksCount = useCompletedTasks(tasks);
  const completionPercentage = useCompletionPercentage(tasks);
  const IncompleteTasks = useIncompleteTasks(tasks);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName: string) => {
    const newTask: Task = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "incompleted") return !task.completed;
    return true;
  });
const deleteTask =(id:number)=>{
  setTasks(tasks.filter(task=>task.id!==id));
};
  return (
    <div className='App'>
      <h1>To-Do-List</h1>
      <TaskFilter onFilterChange={handleFilterChange} currentFilter={filter} />
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={filteredTasks} 
      onToggleTaskCompletion={toggleTaskCompletion} 
      onDeleteTask={deleteTask}
      />
      <p>Completed Tasks: {completedTasksCount}</p>
      <p>Incompleted Tasks:{IncompleteTasks}</p>
      <p>Completion Percentage: {completionPercentage.toFixed(2)}%</p>
    </div>
  );
};

export default App;
