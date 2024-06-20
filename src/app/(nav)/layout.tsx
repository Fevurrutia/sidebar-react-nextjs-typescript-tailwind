'use client'
import React, { ReactNode, useState } from 'react'
import Navbar from '../components/Navbar'

interface Layout {
  children: ReactNode
}

const LayoutNav: React.FC<Layout> = ({children}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  return (
    <div>
        <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar}/>
        <main className={`flex-1 transition-margin ${isNavbarOpen ? 'ml-64' : 'ml-0'}`}>
          <button onClick={toggleNavbar} className='p-4 m-4 bg-blue-500 text-white rounded-md focus:outline-none'>
            {isNavbarOpen ? 'Hide Navbar' : 'Show Navbar'}
          </button>
          {children}
        </main>
    </div>
  )
}

export default LayoutNav
