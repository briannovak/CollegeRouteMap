import React from 'react';

const LandingBreak = () => {
  return (
    <div className="landingBreakWrapper">
      <div className="landingBreakWrapperContent">
        <div><i className="fa fa-map-marker fa-5x" aria-hidden="true"></i></div>
        <div>Need help navigating your journey?</div>
        <div className="breakButton">College Consulting</div>
      </div>
      <div className="landingBreakWrapperContent">
        <div><i className="fa fa-graduation-cap fa-5x" aria-hidden="true"></i></div>
        <div className="studentSuccess">Support for your students success.</div>
        <div className="breakButton">Family Workshops</div>
      </div>
    </div>
  )
}

export default LandingBreak
