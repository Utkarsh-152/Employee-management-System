import React, { useContext, useState } from 'react'
import NewTask from '../tasklist/NewTask'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] =  useContext(AuthContext)
    
    const [taskTitle, setTaskTitle] = useState('')  
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [taskCategory, setTaskCategory] = useState('')

    const [newTask, setNewTask] = useState([])

    const submitHandler = (e)=>{
        e.preventDefault()
        setNewTask({active:false, newTask:true,completed:false,failed:false,taskTitle, taskDescription,taskDate,taskCategory})
        const data = userData
        data.forEach(function(elem){
            if(assignTo==elem.name){
                elem.tasks.push(newTask)
                elem.taskCount.newTask = elem.taskCount.newTask + 1
            }
        })
        setUserData(data)
        console.log(data)

        setAssignTo('')
        setTaskTitle('')
        setTaskCategory('')
        setTaskDate('')
        setTaskDescription('')
    }

  return (
        <div>
            <form onSubmit={(e)=>{submitHandler(e)}} className='mt-10 p-5 bg-[#1C1C1C] flex flex-wrap items-center justify-between'>
                <div className='w-1/2'>
                    <div>
                           <h3 className='text-1xl text-white mb-1'>Task Title</h3>
                        <input 
                        value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                            }}
                        className='w-4/5 bg-transparent py-1 px-2 border-[1.9px] rounded outline-none border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-1xl text-white mb-1'>Date</h3>
                        <input 
                        value={taskDate}
                        onChange={(e)=>{
                            setTaskDate(e.target.value)
                            }}className='w-4/5 bg-transparent py-1 px-2 border-[1.9px] rounded outline-none border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-1xl text-white mb-1'>Assign To</h3>
                        <input 
                        value={assignTo}
                        onChange={(e)=>{
                            setAssignTo(e.target.value)
                            }}
                        className='w-4/5 bg-transparent py-1 px-2 border-[1.9px] rounded outline-none border-gray-400 mb-4' type="text" />
                    </div>
                    <div>
                        <h3 className='text-1xl text-white mb-1'>Category</h3>
                        <input 
                        value={taskCategory}
                        onChange={(e)=>{
                            setTaskCategory(e.target.value)
                            }}
                        className='w-4/5 bg-transparent py-1 px-2 border-[1.9px] rounded outline-none border-gray-400 mb-4' type="text" placeholder='Design, Devlopment Etc' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-1xl text-white mb-1'>Description</h3>
                    <textarea
                    value={taskDescription}
                    onChange={(e)=>{
                        setTaskDescription(e.target.value)
                        }}
                    className='w-full h-44 text-1xl py-2 px-4 rounded outline-none bg-transparent border-2 border-gray-400 mb-10' name="" id="" cols={40} rows={10}></textarea>
                    <button className='bg-emerald-600 w-full text-xl px-5 py-2 rounded hover:bg-emerald-700'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask