import { useState } from 'react'

import {Route,Routes} from 'react-router-dom'

import './App.css'
import Home from './Pages/home/home.jsx'
import CS from './Pages/cs/cs'
function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cs' element={<CS/>}/>
      </Routes>
    </>
  )
}

export default App
