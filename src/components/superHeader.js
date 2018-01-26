import React from 'react';



const SuperHeader = ({superHeaderClass}) => {
  return (
    <div className={superHeaderClass}>
    <div className="superHeaderLeft"><img className="superHeaderLogoImage" src="https://i.imgur.com/LJoHOxg.jpg" title="source: imgur.com" />Promoting Student Success</div>
    <div className="superHeaderRight">
      <div><i className="Tiny material-icons">local_phone</i>(720) 123-4567</div>
      <div><i className="Tiny material-icons">email</i>info@collegeroutemap.com</div>
      <div>
        <i className="fa fa-facebook" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
      </div>
    </div>
    </div>
  )
}

export default SuperHeader
