import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Chat from './pages/Chat/Chat'
import Profile from './pages/Profile/Profile'


const App = () => {
  return (
    //define different routes
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<Navigate to='auth'/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App