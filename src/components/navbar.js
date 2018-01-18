import React from "react";

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
      <div className="logo"><img className="logoImage" src="https://i.imgur.com/LJoHOxg.jpg" title="source: imgur.com" /></div>
      <div className="navSlogan">Promoting Student Success</div>
      <div className="navWhiteSpace"></div>
      <div className="navWorkShops graySwitch">Workshops</div>
      <div className="navServices graySwitch">Services</div>
      <div className="navResources graySwitch">Resources</div>
      <div className="navAbout graySwitch">About</div>
      <div className="navContact graySwitch">Contact</div>
    </div>
  )

}

export default NavBar
