import React from 'react';

const Contact = () => {

  return (
    <div className="contactWrapper">
    <div className="contactWrapperHeader">
      <div className="contactHeader">Contact</div>
      <div className="contactThanks">Thanks!</div>
    </div>
    <div className="convertUser">
      <div className="contactForm">
      <form className="inputForm" action="https://formspree.io/joshnsaunders@gmail.com" method="POST">
        <input className="inputName" type="text" name="name" placeholder="Name"/>
        <input className="inputPhone" type="text" name="phone" placeholder="phone"/>
        <input className="inputEmail" type="email" name="_replyto" placeholder="E-mail"/>
        <input className="inputYear inputName" type="text" name="_replyto" placeholder="Year in School"/>
        <textarea className="inputTextArea" type="text" name="text" placeholder="We'd love to get to know you and we think
        that starts best by sharing some of your short and long term goals."/>
        <input className="inputSend" type="submit" value="Send" />
      </form>
      </div>
      <div className="contactDetails"></div>
      </div>
    </div>
  )
}

export default Contact;
