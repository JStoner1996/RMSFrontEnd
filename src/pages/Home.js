import React from 'react'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
          <div>
            <p> Choose a way to get a Random Movie </p>
         </div>

         <nav>
              
              <Link to="/Actor"><button type="button" className ="indexbutton" id="goToActorButton">Actor</button></Link>
              <Link to="/Category"><button type="button" className ="indexbutton" id = "goToCategoryButton">Category</button></Link>
              <Link to="/Keyword"><button type="button" className ="indexbutton" id="goToKeywordButton">Keyword</button></Link>
              <Link to="/Language"><button type="button" className ="indexbutton" id="goToLanguageButton">Language</button></Link>
              <Link to="/Length"><button type="button" className ="indexbutton" id="goToLengthButton">Length</button></Link>
              
        </nav>    
        
        <br /> <br />
        <div id = "centerdiv">
          <div id="slider">
            <ul id="slideWrap"> 
                <li><img src="assets/images/1.png" alt="Jurassic Park Movie Poster"/></li>
                <li><img src="assets/images/2.png" alt="Back To The Future Movie Poster"/></li>
                <li><img src="assets/images/3.png" alt="Star Wars Movie Poster"/></li>
                <li><img src="assets/images/4.png" alt="E.T. Movie Poster"/></li>
                <li><img src="assets/images/5.png" alt="Avengers: End Game Movie Poster"/></li>
                <li><img src="assets/images/6.png" alt="Jaws Movie Poster"/></li>
                <li><img src="assets/images/7.png" alt="The Hunger Games Movie Poster"/></li>
                <li><img src="assets/images/8.png" alt="Wall-E Movie Poster"/></li>
                <li><img src="assets/images/9.png" alt="The Godfather Movie Poster"/></li>
                <li><img src="assets/images/10.png" alt="How To Train Your Dragon Movie Poster"/></li>
            </ul>
        </div>
      </div>
    </div>
    
  )
}
