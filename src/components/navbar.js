import React from "react";
import { NavLink } from 'react-router-dom';
import SuperHeader from './superHeader';

//<NavLink to="/resources" className="navResources graySwitch">Resources</NavLink>

const NavBar = ({update, click, nav, superHeaderClass, subNav}) => {

const burgerClick = data => {
  if(data){
    data=false
    console.log("data", data);
  } else {
    data=true
    console.log('data', data);
  }
update(data)
}

  return (
    <div className={nav}>
    <SuperHeader superHeaderClass={superHeaderClass}/>
    <div className={subNav}>
      <div className="navBurger fa fa-bars fa-3x" aria-hidden="true"
        onClick={burgerClick.bind(this, click)}
      ></div>
      <NavLink exact to="/" className="logo"></NavLink>
      <div className="navSlogan"></div>
      <div className="navWhiteSpace"></div>
      <NavLink to="/workshops" className="navWorkShops graySwitch">Workshops</NavLink>
      <NavLink to="/services" className="navServices graySwitch">Services</NavLink>
      <NavLink to="/about" className="navAbout graySwitch">About</NavLink>
      <NavLink to="/contact" className="navContact graySwitch">Contact</NavLink>
      <a target="_blank" href="https://collegeroutemap.collegeplannerpro.com/" className="navCurrentStudents graySwitch">Current Students</a>
    </div>

  </div>
  )

}

export default NavBar
