import React from 'react'
import logo from "../../assets/images/logo.png"
import { NavLink, Link } from 'react-router-dom'


const nav__links = [
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

const Header = () => {
  

  return (
    <header className="header">
      <Container>
        <div className="nav_wrapper">
          {/* =================== logo ==================== */}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          {/* =================== menu ==================== */}
          <div className="navigation">
            <div className="menu">

            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header