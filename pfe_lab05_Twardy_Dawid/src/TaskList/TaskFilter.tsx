import React from "react";
import './TaskFilter.scss';
interface TaskFilterProps{
    onFilterChange:(filter:string)=>void;
    currentFilter:string;
}

const TaskFilter: React.FC<TaskFilterProps>=({onFilterChange,currentFilter})=>{
    return(
        <div className="task-filter">
            <button 
            className={currentFilter==='all'?'activate':''}
            onClick={()=>onFilterChange('all')}>All</button>
            <button
            className={currentFilter==='all'?'activate':''}
            onClick={()=>onFilterChange('completed')}>
                
            completed</button>
            <button
             className={currentFilter==='all'?'activate':''}
            onClick={()=>onFilterChange('incompleted')}>incompleted</button>
        </div>
    );
};
export default TaskFilter;