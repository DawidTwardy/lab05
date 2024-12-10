import React from "react";
import { Task } from "../App";
import "./TaskList.scss";
interface TaskListProps{
    tasks:Task[];
    onToggleTaskCompletion:(id:number)=>void;
    onDeleteTask:(id:number)=>void;
}

const TaskList:React.FC<TaskListProps>=({tasks,onToggleTaskCompletion,onDeleteTask})=>{
    return(
        <ul>
           {tasks.map((task)=>(
          <li key={task.id} className={`task ${task.completed ? 'completed-task' : ''} `}>
            <span> {task.name}</span>
            <div>
                <button onClick={()=>onToggleTaskCompletion(task.id)}>
                {task.completed ? 'undo': 'Complete'};
                </button>
                <button onClick={()=>onDeleteTask(task.id)} className="delete-btn">DELETE</button>
            </div>
          </li>
           ))}
        </ul>
    );
};
export default TaskList;