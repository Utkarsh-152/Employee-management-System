import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
      return (
    <div id='tasklist' className='h-[53%] overflow-x-auto flex gap-10 items-start justify-start w-full py-5 mt-10 flex-nowrap'>
        {data.tasks.map((elem, idx)=>{
            if(elem.active){
                return <AcceptTask data={elem} key={idx} />
            }
            if(elem.completed){
                return <CompleteTask data={elem} key={idx}/>
            }
            if(elem.newTask){
                return <NewTask data={elem} key={idx}/>
            }
            if(elem.failed){
                return <FailedTask data={elem} key={idx}/>
            }
        })}
    </div>
  )
}

export default TaskList