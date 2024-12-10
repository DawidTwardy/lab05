import React from "react";
import { Task } from "../type";
import "./TaskList.scss";
import { motion, AnimatePresence } from "framer-motion";

interface TaskListProps {
  tasks: Task[];
  onToggleTaskCompletion: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTaskCompletion, onDeleteTask }) => {
  return (
    <div className="task-list-container">
      <div className="tasks-container">
        {tasks.length === 0 && (
          <p className="no-tasks-message">No tasks to show. Add some tasks!</p>
        )}
        <ul className="task-list">
          <AnimatePresence>
            {tasks.map((task, index) => (
              <motion.li
                key={task.id}
                layout
                className={`task ${task.completed ? "completed-task" : ""}`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="task-name">{task.name}</span>
                <div className="task-actions">
                  <button
                    onClick={() => onToggleTaskCompletion(task.id)}
                    className="toggle-completion-btn"
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
                {task.realizedDate && (
                  <div className="task-realized">
                    <p>Realized: {task.realizedDate}</p>
                  </div>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
