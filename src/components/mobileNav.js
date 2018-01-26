import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileNav = ({update, click}) => {

const burger = (data) => {
  // console.log("burgerClick, mobile");
  if (data){
     return "mobileNav show"
  } else {
    return "mobileNav hide"
  }
}

  return (
    <div className={burger(click)}>
      <a target="_blank" href="https://collegeroutemap.customcollegeplan.com/" className="mobileCurrentStudents">Current Students</a>
      <NavLink to="/workshops" className="mobileWorkshops">Workshops</NavLink>
      <NavLink to="/services" className="mobileServices">Services</NavLink>
      <NavLink to="/resources" className="mobileResources">Resources</NavLink>
      <NavLink to="/about" className="mobileAbout">About</NavLink>
      <NavLink to="/contact" className="mobileContact">Contact</NavLink>
    </div>
  )
}

export default MobileNav;
