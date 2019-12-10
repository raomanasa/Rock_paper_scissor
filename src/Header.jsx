import React from "react"
import { NavLink, Link } from 'react-router-dom';
 
const Header = () => {
  return (
    <nav className='ui fixed inverted menu'>
      <div className="ui container">
        <Link className="header item" to='/'>Rock_Paper_Scissor</Link>
        <div className="right menu">
          <Link className="ui item" activeStyle={{ fontWeight: "bold" }} to='/about'>About Game</Link>
          <Link className="ui item" activeStyle={{ fontWeight: "bold" }} to='/game'>Lets Play!</Link>
        </div>
      </div>
    </nav>
    )
}
export default Header
