import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="navBlockFirst">
        <NavLink className="link" to='/'>Shop</NavLink>
      </div>
      <div className="navBlockSecond">
        <NavLink className="link" to='cart'>Shopping cart</NavLink>
      </div>
    </header>
  )
}

export default Header