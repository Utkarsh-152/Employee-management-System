import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='py-[80px] px-[60px] border-emerald-400 border-2 rounded-2xl'>
          <form 
          onSubmit={(e)=>{submitHandler(e)}}
          className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required 
            className='text-xl bg-transparent py-1 px-8 outline-none border-emerald-400 border-2 rounded-full placeholder:text-gray-500' type="Email" placeholder='Enter Your Email' />
            <input
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            required 
            className='text-xl bg-transparent py-1 mt-3 px-8 outline-none border-emerald-400 border-2 rounded-full placeholder:text-gray-500' type="Password" placeholder='Enter Your Password' />
            <button className='text-xl hover:bg-emerald-700 hover:text-semibold text-white py-1 mt-6 px-8 outline-none bg-emerald-400 rounded-full'>Log In</button>
          </form>
      </div>
    </div>
  )
}

export default Login