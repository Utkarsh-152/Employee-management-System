import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-600 rounded-2xl hover:bg-black hover:text-white'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-[1px]'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription}</p>
        <div className='flex justify-between mt-4'>
            <button className='rounded border-[1px] border-black bg-emerald-600 py-1 px-2 text-sm hover:bg-emerald-800'>Mark as Completed</button>
            <button className='rounded border-[1px] border-black bg-red-600 py-1 px-2 text-sm hover:bg-red-800'>Mark as Failed</button>
        </div>
    </div>

    
        )
}

export default AcceptTask