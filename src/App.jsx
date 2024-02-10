import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <nav className='flex leading-10 sticky '>
         <div>
            <h2 className='text-white'>Harshil Thadeshwar</h2>
         </div>
         <div className=''>
            <ul className='text-white roboto'>
               <li><a>Home</a></li>
               <li><a>About Us</a></li>
               <li><a>Skills</a></li>
               <li><a>Services</a></li>
               <li><a>Projects</a></li>
            </ul>
         </div>
      </nav>
    </>
  )
}

export default App
