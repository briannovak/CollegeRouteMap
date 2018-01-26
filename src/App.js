import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import NavBar from './components/navbar'
import Hero from './components/hero'
import MobileNav from './components/mobileNav'
import Problem from './components/problem'
import Footer from './components/footer'
import Landing from './components/landing'
import Workshops from './components/workshops'
import Services from './components/services'
import Resources from './components/resources'
import About from './components/about'
import SuperHeader from './components/superHeader'
import Contact from './components/contact'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked:false,
      header:"superHeaderWrapper",
      nav:"navbar",
      workshop:"workshopHeroWrapper",
      subNav:"subNav",
      backgroundImage:"heroWrapper",
      navSpace:"hide"
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(){
    if(window.scrollY>=150){
      this.setState( {...this.state,
        header:'hide',
        nav:"navbar fixed",
        workshop:"workshopHeroWrapper scroll",
        subNav:"subNav noBorderTop",
        backgroundImage:"heroWrapper backgroundPosition",
        app:"App marginTop"} )
    } else if (window.scrollY>1&&window.scrollY<15){
      this.setState( { header:'superHeaderWrapper opacityOne' })
    } else if(window.scrollY>=15&&window.scrollY<30){
      this.setState( {header:'superHeaderWrapper opacityTwo'} )
    } else if (window.scrollY>=30&&window.scrollY<45){
      this.setState( {header:'superHeaderWrapper opacityThree' })
    } else if (window.scrollY>=45&&window.scrollY<60){
      this.setState({header:'superHeaderWrapper opacityFour'})
    } else if (window.scrollY>=60&&window.scrollY<75){
      this.setState({header:'superHeaderWrapper opacityFive'})
    } else if (window.scrollY>=75&&window.scrollY<90){
      this.setState({header:'superHeaderWrapper opacitySix'})
    } else if (window.scrollY>=90&&window.scrollY<105){
      this.setState({header:'superHeaderWrapper opacitySeven'})
    } else if (window.scrollY>=105&&window.scrollY<120){
      this.setState({header:'superHeaderWrapper opacityEight'})
    } else if (window.scrollY>=120&&window.scrollY<135){
      this.setState({header:'superHeaderWrapper opacityNine'})
    } else if (window.scrollY>=135&&window.scrollY<=150){
      this.setState({header:'superHeaderWrapper opacityTen'})
      console.log('135 to 150');
    }
    else {
      this.setState({header:'superHeaderWrapper'});
    }
    if (window.scrollY<150){
      this.setState({
        nav:"navbar relative",
        workshop:"workshopHeroWrapper",
        subNav:"subNav",
        backgroundImage:"heroWrapper",
        app:"App"
      })
    }
  }

  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <div className={this.state.navSpace}></div>
        <NavBar subNav={this.state.subNav} superHeaderClass={this.state.header} nav={this.state.nav} click={this.state.clicked} update={clk => {
          console.log("update clicks"), this.setState({...this.state, clicked:clk});}}/>
        <MobileNav click={this.state.clicked} update={clk => {
          console.log("update clicks"), this.setState({...this.state, clicked:clk});}}/>
          <Route path="/workshops" component={Workshops} workshopHeroWrapper={this.state.workshop}/>
          <Route path="/services" component={Services}/>
          <Route path="/resources" component={Resources}/>
          <Route path="/about" component={About}/>
          <Route exact path="/" component={Landing}/>
          <Route path="/contact" component={Contact}/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
