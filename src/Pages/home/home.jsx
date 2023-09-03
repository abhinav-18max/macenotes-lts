import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css'
import { NavLink } from 'react-router-dom'
import Cs from '../cs/cs'

function Home() {
  return (
    <>
     <br></br>
    <NavLink to='/cs'>cse</NavLink><br></br>
    <NavLink to='/contribute'>contribute</NavLink></>
  )
}

export default Home