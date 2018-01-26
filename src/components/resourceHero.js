import React, { Component } from 'react';
import ContactBanner from './contactBanner'

class ResourceHero extends Component{

  constructor(props){
    super(props)
    this.state ={
      contentPadding:"resourceHeroWrapper"
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll(){
    if(window.scrollY>=150){
      this.setState({
        contentPadding:"resourceHeroWrapper paddingTop"
      })
    } else {
      this.setState({contentPadding:"resourceHeroWrapper"})
  }
}

render(){
  return (
    <div className={this.state.contentPadding}>
      <div className="resourceContentWrapper">
        <div>
          <div>Financial Aid</div>
          <div></div>
        </div>
        <div>
          <div>Admissions</div>
          <div></div>
        </div>
        <div>
          <div>Graduating</div>
          <div></div>
        </div>
      </div>
      <ContactBanner />
    </div>
  )
}
}
export default ResourceHero
