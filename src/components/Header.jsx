import React from 'react';
import ImageLogo from '../components/assets1/resto.png';
import './style/header.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";



const Header = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate("/login")
    window.location.reload()
  }
  return (
    <>
      <div className="header-all">
        <div className='nav'>
          <ul>
            <button onClick={logout}>Logout</button>
            <Link to="contact"><strong><li>Contact</li></strong></Link>
            <Link to="about"><strong><li>About Us</li></strong></Link>
          </ul>
        </div>
        <Link to={"/"}>
        <img className="logo" src={ImageLogo} alt="Logo" />
        </Link>
        <div className='nav'>
          <ul>
            <Link to="menu"><strong><li>Menu</li></strong></Link>
            <Link to="/"><strong><li>Home</li></strong></Link>
            <Link to={"search"}>
            <FaSearch className='srch'/>
            </Link>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Header
