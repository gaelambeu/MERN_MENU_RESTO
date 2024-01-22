import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  const navLinks = [
    {
      path:'/',
      display: 'Home'
    },
    {
      path:'/menuAllFood',
      display: 'All Menu'
    },
    {
      path:'/commandeByTable',
      display: 'My Command'
    },
  ]

  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">

        </div>
      </div>
    </header>
  )
}

export default Header