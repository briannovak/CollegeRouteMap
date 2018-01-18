import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navbar'
import Contact from './components/contact'
import Hero from './components/hero'
import MobileNav from './components/mobileNav'
import Problem from './components/problem'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked:false
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar click={this.state.clicked} update={clk => {
          console.log("update clicks"), this.setState({...this.state, clicked:clk});}}/>
        <MobileNav click={this.state.clicked} update={clk => {
          console.log("update clicks"), this.setState({...this.state, clicked:clk});}}/>
        <Hero />
        <Problem />
        <Contact />
      </div>
    );
  }
}

export default App;
