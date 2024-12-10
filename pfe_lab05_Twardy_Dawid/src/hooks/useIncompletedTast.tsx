import { useEffect, useState } from "react";

const useIncompleteTasks = (tasks: { completed: boolean }[]) => {
    const [incompleteTasksCount, setIncompleteTasksCount] = useState(0);

    useEffect(() => {
        const count = tasks.filter(task => !task.completed).length;
        setIncompleteTasksCount(count);
    }, [tasks]);

    return incompleteTasksCount;
};

export default useIncompleteTasks;

