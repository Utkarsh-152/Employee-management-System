import React from 'react'

const Header = (props) => {

  const logOut = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>your <br /> <span className='text-4xl font-semibold'>Dashbaord 👏</span> </h1>
        <button onClick={logOut} className='bg-red-500 hover:bg-black hover:text-white text-white py-1 px-3 rounded-md text-lg font-medium'>Log Out</button>
    </div>
    )
}

export default Header