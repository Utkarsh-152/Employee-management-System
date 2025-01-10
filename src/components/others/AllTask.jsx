import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] =  useContext(AuthContext)
  return (
    <div className='mt-5 bg-black px-10 py-5 rounded'>
        <div className='hover:bg-emerald-900 bg-emerald-600 py-2 px-4 flex justify-between rounded mb-3'>
            <h5 className='w-1/5 text-lg font-md font-semibold'>Employee Name</h5>
            <h5 className='w-1/5 text-lg font-md font-semibold'>Active Task</h5>
            <h5 className='w-1/5 text-lg font-md font-semibold'>New Task</h5>
            <h5 className='w-1/5 text-lg font-md font-semibold'>Completed</h5>
            <h5 className='w-1/5 text-lg font-md font-semibold'>Failed</h5>
        </div>

        <div className='overflow-auto'>
        {userData.map((elem, idx)=>{
            return  <div key={idx} className='hover:border-2 hover:border-emerald-500 bg-[#1C1C1C] py-2 px-4 flex justify-between rounded mb-3'>
                        <h5 className='w-1/5 text-lg font-md'>{elem.name}</h5>
                        <h5 className='w-1/5 text-lg font-md text-yellow-400'>{elem.taskCount.active}</h5>
                        <h5 className='w-1/5 text-lg font-md text-red-400'>{elem.taskCount.newTask}</h5>
                        <h5 className='w-1/5 text-lg font-md text-emerald-600'>{elem.taskCount.completed}</h5>
                        <h5 className='w-1/5 text-lg font-md text-red-400'>{elem.taskCount.failed}</h5>
                    </div>
         })}  
        </div>           
    </div>
  )
}

export default AllTask