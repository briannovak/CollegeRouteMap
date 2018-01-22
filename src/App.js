import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import NavBar from './components/navbar'
import Contact from './components/contact'
import Hero from './components/hero'
import MobileNav from './components/mobileNav'
import Problem from './components/problem'
import Footer from './components/footer'
import Landing from './components/landing'
import Workshops from './components/workshops'
import Services from './components/services'
import Resources from './components/resources'
import About from './components/about'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked:false
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event){
    if(window.scrollY>105){
      console.log('scrolling');
    }
  }

  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <NavBar click={this.state.clicked} update={clk => {
          console.log("update clicks"), this.setState({...this.state, clicked:clk});}}/>
        <MobileNav click={this.state.clicked} update={clk => {
          console.log("update clicks"), this.setState({...this.state, clicked:clk});}}/>
        <Route exact path="/" component={Landing}/>
        <Route path="/workshops" component={Workshops}/>
        <Route path="/services" component={Services}/>
        <Route path="/resources" component={Resources}/>
        <Route path="/about" component={About}/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
