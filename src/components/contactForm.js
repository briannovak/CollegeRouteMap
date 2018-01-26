import React from 'react';

// <textarea className="inputTextArea" type="text" name="text" placeholder="We'd love to get to know you and we think
// that starts best by sharing some of your short and long term goals."/>

const ContactForm = () => {

  return (
    <div className="contactWrapper">
    <div className="contactWrapperHeader">
    New Client Form
    </div>
    <div className="convertUser">
      <div className="contactForm">
      <form className="inputForm" action="https://formspree.io/joshnsaunders@gmail.com" method="POST">
        <input className="inputName" type="text" name="name" placeholder="Person completing form"/>
        <input className="inputName" type="text" name="name" placeholder="Relationship to Client"/>
        <input className="inputName" type="text" name="name" placeholder="Name of Client"/>
        <input className="inputName" type="text" name="name" placeholder="Age"/>
        <input className="inputName" type="text" name="name" placeholder="Grade"/>
        <input className="inputName" type="text" name="name" placeholder="School"/>
        <input className="inputName" type="text" name="name" placeholder="Other Parent"/>
        <input className="inputName" type="text" name="name" placeholder="How were you referred?"/>
        <input className="inputName" type="text" name="name" placeholder="Preferred methods of contact"/>
        <input className="inputName" type="text" name="phone" placeholder="phone"/>
        <input className="inputName" type="email" name="_replyto" placeholder="E-mail"/>
        <input className="inputName" type="text" name="_replyto" placeholder="Year in School"/>
        <textarea className="inputTextArea inputName" type="text" name="text" placeholder="What would you like us to know?"/>
        <input className="inputSend" type="submit" value="Send" />
      </form>
      </div>
      <div className="contactDetails"></div>
      </div>
    </div>
  )
}

export default ContactForm
