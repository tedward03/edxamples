import React, { Component } from 'react';
import MrEd from './resources/mrEd.png';
import './App.css';
import bojack from './resources/bojack.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import reactElementToJSXString from 'react-element-to-jsx-string';
 
class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar/> 
        {initRouteList.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}    
      </div> 
    );
  }
}

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark">
      <a className="homeBrand" href="/">
        <img className="homeBrandImage" src={bojack} title="Home" alt="Home"/>
      </a>
      <ul className="nav navbar">
        <li>
          <Link className="nav-link" to={initRouteList[1].path}>Examples</Link>
        </li>
      </ul>
    {/* <ul className="navbar-nav">
        <li className="nav-item">
           
             
            </Link>
        <ul className ="nav navbar-nav">
        </li>
      
      </ul> */}
    </nav>
  );
}

// this is the landing component, it should contain an image of mr ed and little description
export const Landing = () => {
  return (
    <header className="App-header">
          <img src={MrEd}/>
          <p>
            What kind of name is Ed for a developer?
          </p>
          <p className="landingDescription">
            This project is used as a catalog of my learning of React.js
          </p>
    </header>
  );
} 

export const ExamplesList = () => {
  return (
    <div className="row">
       <ul className="col-md-3"> 
       {/* render the link option for the example */}
        {examplesRouteList.map((route,index) => (
          <li key={index} className="nav-item">
            <Link className="nav-link" to={route.path}>{route.itemName}</Link>
          </li>
        ))}
      </ul>
      {/* include the actual route here ie render in the component from the routeList */}
      {examplesRouteList.map((route, index) => (
          <Route className="example-board"
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))} 
    </div>
  );
}

export const initRouteList = [
  {
    path: "/",
    exact: true ,
    component: () => <Landing/>  
  },
  {
    path: "/examples",
    component: () => <ExamplesList/> 
  }
];

// array of all routes within the application 
export const examplesRouteList  = [
 {
    path: "/examples/components",
    itemName: "Components Example",
    component: () => <ComponentsExample/>
  },{
    path: "/examples/jsxvselement",
    itemName: "Components Example 2",
    component: () => <div>Hello</div>
  }
];

export const ComponentsExample = () => {
  return (
    <div>
    </div>
  );
}

export default App;
