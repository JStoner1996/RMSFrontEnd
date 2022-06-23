import React from 'react'

export default function Category() {
  return (
    
    <React.Fragment>
        <p>Click which category you want.</p>
        
        <div id="actors">
            <ul id="categories">
                <div className="row">
                    <li><div className = "column"><button type="button" id = "randomByAction" onClick={() => randomByCategory("Action")}>Action</button></div></li>
                    <li><div className = "column"><button type="button" id = "randomByComedy" onClick={() => randomByCategory("Comedy")}>Comedy</button></div></li>
                    <li><div className = "column"><button type="button" id = "randomByForeign" onClick={() => randomByCategory("Foreign")}>Foreign</button></div></li>
                    <li><div className = "column"><button type="button" id = "randomByNew" onClick={() => randomByCategory("New")}>New</button></div> </li>


                    <li><div className = "column"><button type="button" id = "randomByAnimation" onClick={() => randomByCategory("Animation")}>Animation</button></div></li> 
                    <li><div className = "column"><button type="button" id = "randomByDocumentary" onClick={() => randomByCategory("Documentary")}>Documentary</button></div></li>
                    <li><div className = "column"><button type="button" id = "randomByGames" onClick={() => randomByCategory("Games")}>Games</button></div></li>
                    <li><div className = "column"><button type="button" id = "randomBySci-Fi" onClick={() => randomByCategory("Sci-Fi")}>Sci-Fi</button></div></li>

                    <li><div className = "column"><button type="button" id = "randomByChildren" onClick={() => randomByCategory("Children")}>Children</button></div></li>
                    <li><div className = "column"><button type="button" id = "randomByDrama" onClick={() => randomByCategory("Drama")}>Drama</button> </div></li>
                    <li><div className = "column"><button type="button" id = "randomByHorror" onClick={() => randomByCategory("Horror")}>Horror</button></div></li>
                    <li><div className = "column"><button type="button" id = "randomBySports" onClick={() => randomByCategory("Sports")}>Sports</button></div></li>

                    <li><div className = "column"><button type="button" id = "randomByClassics" onClick={() => randomByCategory("Classics")}>Classics</button> </div></li>
                    <li><div className = "column"><button type="button" id = "randomByFamily" onClick={() => randomByCategory("Family")}>Family</button></div></li>
                    <li><div className = "column"><button type="button" id = "randomByMusic" onClick={() => randomByCategory("Music")}>Music</button></div></li>
                    <li><div className = "column"><button type="button" id = "randomByTravel" onClick={() => randomByCategory("Travel")}>Travel</button></div></li>
                </div>
            </ul>
        </div>
        
       <br/><br/><br/>
    </React.Fragment>
  )
}

// Random Film by Category
function randomByCategory(category){
    
    let filmDiv = document.getElementById("randomFilm");
    console.log(`https://program-1655722794469.azurewebsites.net/filmRandomizer/film/randomByCategory/${category}`);
    fetch(`https://program-1655722794469.azurewebsites.net/filmRandomizer/film/randomByCategory/${category}`)
    .then(res => res.json())
    .then(film=> {
        if (film.title != null){
            filmDiv.innerHTML = `<h2>${film.title}</h2><p>${film.description} <p/>`
            } else {
                filmDiv.innerHTML = `<h2>No Matching Film</h2>`
            }
    });
}
