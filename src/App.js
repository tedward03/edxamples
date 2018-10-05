import React, { Component } from 'react';
import MrEd from './resources/mrEd.png';
import './App.css';
import bojack from './resources/bojack.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/"><img className="navbarbrandImage" src={bojack}/></Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/examples">Examples</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/betterExamples">BetterExamples</Link>
            </li>
          </ul>
        </nav>
         <Route exact path="/" component= {Landing}/>
         <Route path="/examples" component= {Examples}/>    
         <Route path="/betterExamples" component= {BetterExamples}/>    

      </div>    
    );
  }
}

export const Landing = () => {
  return (
    <header className="App-header">
          <img src={MrEd}/>
          <p>
            What kind of name is Ed for a developer?
          </p>
    </header>
  );
} 

export const Examples = () => {
  return ( 
    <ol> 
      <li>
        Routing
      </li>
    </ol>
  );
}

export const BetterExamples = () => {
  return ( 
    <ol> 
      <li>
        Better Routing
      </li>
    </ol>
  );
}

export default App;
