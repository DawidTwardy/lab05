import React from "react";
import { Task } from "../App";
import "./TaskList.scss";
interface TaskListProps{
    tasks:Task[];
    onToggleTaskCompletion:(id:number)=>void;
}

const TaskList:React.FC<TaskListProps>=({tasks,onToggleTaskCompletion})=>{
    return(
        <ul>
           {tasks.map((task)=>(
            <li className={['task',task.completed ? 'completed-task':''].join(' ')}key={task.id} onClick={()=>onToggleTaskCompletion(task.id)}>{task.name}</li>
           ))}
        </ul>
    );
};
export default TaskList;