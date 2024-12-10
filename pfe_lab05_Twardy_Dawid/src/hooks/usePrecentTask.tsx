import { useEffect, useState } from "react";


const usePrecentTask = (tasks: { completed: boolean }[]) =>  {
    const [completionPercentage, usePrecentTask] = useState(0);

    useEffect(() => {
        const completedTasks = tasks.filter(task => task.completed).length;
        const percentage = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;
        usePrecentTask(percentage);
    }, [tasks]);

    return completionPercentage;
};

export default usePrecentTask;