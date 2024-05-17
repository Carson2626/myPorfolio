import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-yellow-400 p-4 border-b-2 border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Exercise 1: Turn this into a functional Navbar with routing. 
            Hint** Use the <Link> component from react-router-dom
        */}

        <div className="text-lg font-semibold">
          <button className="hover:text-white p-2 rounded-lg">
            <Link to="/">My Portfolio</Link>
          </button>
        </div>
        <div>
          <button className="hover:text-white px-3">
            <Link to="/blog">Blog</Link>
          </button>
          <button className="hover:text-white px-3">
            <Link to="/experience">Experience</Link>
          </button>
          <button className="hover:text-white px-3">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
