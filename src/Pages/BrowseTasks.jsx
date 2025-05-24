import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from '../Components/TaskCard';

const BrowseTasks = () => {
    useEffect(()=> {
    document.title = "ProjectBuddies | Browse Tasks"
  }, []);
    const tasks = useLoaderData();
    console.log(tasks);

    return (
        <div className='mx-3 md:mx-16 lg:mx-24 mt-3 md:mt-6 lg:mt-9'>
            <h1 className='font-bold text-2xl md:text-3xl text-primary text-center'>Avaiable Tasks</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-5'>
                {tasks.map(task=> <TaskCard key={task._id} task={task}></TaskCard>)}
            </div>
        </div>
    );
};

export default BrowseTasks;