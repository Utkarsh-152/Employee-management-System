import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-violet-600 rounded-2xl hover:bg-black hover:text-white'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-[1px]'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-3'>{data.taskDescription}</p>
        <div className='mt-4'>
            <button className='bg-red-600 rounded border-[1px] border-black w-full hover:bg-red-800'>Failed</button>
        </div>
    </div>
  )
}

export default FailedTask