import React from 'react';

const MobileNav = ({update, click}) => {

const burger = (data) => {
  console.log("burgerClick, mobile");
  if (data){
     return "mobileNav show"
  } else {
    return "mobileNav hide"
  }
}

  return (
    <div className={burger(click)}>
      <div className="mobileWorkshops">Workshops</div>
      <div className="mobileServices">Services</div>
      <div className="mobileResources">Resources</div>
      <div className="mobileAbout">About</div>
      <div className="mobileContact">Contact</div>
    </div>
  )
}

export default MobileNav;
