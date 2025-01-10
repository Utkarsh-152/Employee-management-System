import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  
  
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])
  

  useEffect(() => {
    if(user){
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, [userData]);

  const handleLogin = (email, password) => { 
    if(email == 'admin@me.com' && password == '0000') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee = userData.find((e)=> email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }

    }
    else{
      alert("invalid credential")
    }
  }  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} />: (user == 'employee' ? <EmployeeDashboard changeUser={setUser}  data ={loggedInUserData} /> : null)}
    </>
  )
}

export default App