import React from 'react'

const TaskListNumbers = ({data}) => {
  return (    
    <div className='flex justify-between mt-10 gap-5'>
        <div className='rounded-xl w-[40%] bg-red-400 py-6 px-9 hover:bg-black hover:text-white'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-2xl font-medium'>New Task</h3 >
        </div>
        <div className='rounded-xl w-[40%] bg-blue-400 py-6 px-9 hover:bg-black hover:text-white'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-2xl font-medium'>Accepted Task</h3 >
        </div>
        <div className='rounded-xl w-[40%] bg-emerald-400 py-6 px-9 hover:bg-black hover:text-white'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-2xl font-medium'>Completed Task</h3 >
        </div>
        <div className='rounded-xl w-[40%] bg-yellow-300 py-6 px-9 hover:bg-black hover:text-white'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-2xl font-medium'>Failed Task</h3 >
        </div>  
    </div>
  )
}

export default TaskListNumbers