import React from 'react'
import { Container } from 'reactstrap'
import logo from '../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'


const nav__links = [
  {
    path:'/',
    display: 'Home'
  },
  {
    path:"/menuAllFood",
    display: 'All Foods'
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
        <div className="nav_wrapper d-flex items-center justify-between">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          {/* =================== menu ==================== */}
          <div className="navigation">
            <div className="menu">
                {nav__links.map((item, index) => (
                    <NavLink to={item.path} key={index}>
                      {item.display}
                    </NavLink>
                  ))}
            </div>
          </div>

          {/* =================== menu ==================== */}
          <div className="nav_right">
            <span className="cart__icon">

            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header