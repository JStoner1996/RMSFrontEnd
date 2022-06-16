import React from 'react'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
          <div>
            <p> Choose a way to get a Random Movie </p>
         </div>

         <nav>
              <Link to="/Category"><button type="button" className ="indexbutton">Category</button></Link>
              <Link to="/Actor"><button type="button" className ="indexbutton">Actor</button></Link>
              <Link to="/Keyword"><button type="button" className ="indexbutton">Keyword</button></Link>
              <Link to="/Length"><button type="button" className ="indexbutton">Length</button></Link>
              <Link to="/Language"><button type="button" className ="indexbutton">Language</button></Link>
        </nav>    
        
        <br /> <br />
        <div id = "centerdiv">
          <div id="slider">
            <ul id="slideWrap"> 
                <li><img src="assets/images/1.png" alt=""/></li>
                <li><img src="assets/images/2.png" alt=""/></li>
                <li><img src="assets/images/3.png" alt=""/></li>
                <li><img src="assets/images/4.png" alt=""/></li>
                <li><img src="assets/images/5.png" alt=""/></li>
                <li><img src="assets/images/6.png" alt=""/></li>
                <li><img src="assets/images/7.png" alt=""/></li>
                <li><img src="assets/images/8.png" alt=""/></li>
                <li><img src="assets/images/9.png" alt=""/></li>
                <li><img src="assets/images/10.png" alt=""/></li>
            </ul>
        </div>
      </div>
    </div>
    
  )
}
