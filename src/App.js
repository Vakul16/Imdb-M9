import React, { Component } from 'react';
//import logo from './logo.svg';
import { BrowserRouter, Route } from "react-router-dom";
import Button from '@material-ui/core/Button';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Signin from './components/Signin'
import Navbar from './components/Navbar'
import 'antd/dist/antd.css';

class App extends Component{
  render(){
    return(
      <div className = "App">
        <BrowserRouter>
        <Navbar />
        {/* <Signin /> */}
        {/* <NormalLoginForm /> */}
          <Route path = "/home" component = {Home} />
          <Route path = "/about" component = {About} />
          <Route path = "/signin" component = {Signin} />
          {/* <Route path = "/navbar" component = {Navbar} /> */}
          {/* <Route path = "/" component = {ProductList} /> */}
          {/* <Route component = {Default} /> */}
          
        </BrowserRouter>

        
      </div>
    )
  }
}
export default App;





    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
