import Link from 'next/link'
import React from 'react'

interface NavbarProps {
  isOpen: boolean,
  toggleNavbar: () => void
}

const Navbar = ({ isOpen, toggleNavbar }: NavbarProps) => {
  return (
    <>
      <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}>
        <button onClick={toggleNavbar} className='p-4 focus:outline-none'>
          {isOpen ? 'Close' : 'Open'}
        </button>
        <nav className='mt-10'>
          <ul className='p-0'>
            <li className='p-2'>
              <Link href='/about'>About</Link>
            </li>
            <li className='p-2'>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className='p-2'>
              <Link href='/skills'>Skills</Link>
            </li>
            <li className='p-2'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
