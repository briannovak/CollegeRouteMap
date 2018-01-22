import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = ({update, click}) => {

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
    <div className="navbar">
      <div className="navBurger fa fa-bars fa-3x" aria-hidden="true"
        onClick={burgerClick.bind(this, click)}
      ></div>
      <NavLink exact to="/" className="logo"><img className="logoImage" src="https://i.imgur.com/LJoHOxg.jpg" title="source: imgur.com" /></NavLink>
      <div className="navSlogan">Promoting Student Success</div>
      <div className="navWhiteSpace"></div>
      <NavLink to="/workshops" className="navWorkShops graySwitch">Workshops</NavLink>
      <NavLink to="/services" className="navServices graySwitch">Services</NavLink>
      <NavLink to="/resources" className="navResources graySwitch">Resources</NavLink>
      <NavLink to="/about" className="navAbout graySwitch">About</NavLink>
      <div className="navContact graySwitch">Contact</div>
      <a target="_blank" href="https://collegeroutemap.customcollegeplan.com/" className="navCurrentStudents graySwitch">Current Students</a>
    </div>
  )

}

export default NavBar
