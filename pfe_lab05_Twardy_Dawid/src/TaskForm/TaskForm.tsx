import React, { useState, useEffect, useRef } from 'react';

interface TaskFormProps {
  onAddTask: (taskName: string, realizedDate: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [realizedDate, setRealizedDate] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task, realizedDate); // Przekazujemy również realizedDate
      setTask('');
      setRealizedDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <input
        type="date"
        value={realizedDate}
        onChange={(e) => setRealizedDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
