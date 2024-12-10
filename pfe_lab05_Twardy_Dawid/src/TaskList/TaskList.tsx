import React, { useRef } from "react";
import { Task } from "../App";
import "./TaskList.scss";
import { motion, AnimatePresence, useScroll } from "framer-motion";

interface TaskListProps {
    tasks: Task[];
    onToggleTaskCompletion: (id: number) => void;
    onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTaskCompletion, onDeleteTask }) => {
    // Hook do monitorowania przewijania
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: containerRef // Ograniczenie do konkretnego kontenera
    });

    return (
        <div className="task-list-container">
            {/* Pasek przewijania */}
            <div className="scroll-container">
                <motion.div
                    className="scroll-progress"
                    style={{ scaleX: scrollYProgress }}
                />
            </div>

            {/* Lista zadań */}
            <div ref={containerRef} className="tasks-container">
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
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </div>
        </div>
    );
};

export default TaskList;
