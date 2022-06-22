
//import './App.css';

import RouterPage from './pages/RouterPage';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';



function App() {
  return (
    <div className="App">
    <Header />
      <RouterPage />
    <Footer />
    </div>
  );
}

function Header(){
  return (
    <h1>Random Movie Selector</h1>
  )
  }
  
  function Footer(){
        const { pathname } = useLocation();
        // you can check a more conditions here
        if (pathname === "/") {
          return (<p></p>);
        } else {
        return (
          <React.Fragment>
            <div id ="randomFilm">
                  <p>Your Random Film will be displayed here!</p>
                  
              </div>
            <Link to="/"><button type="button" className = "home">Go Home</button></Link>
          </React.Fragment>
    )
  }
}

export default App;
