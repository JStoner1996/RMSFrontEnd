import React from 'react'


export default function Category() {
  return (
    
    <React.Fragment>
        <p>Click which category you want.</p>
        
        <div id="centerdiv">
            <div className="row">
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Action")}>Action</button></div>
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Animation")}>Animation</button></div>
            </div>
            <div className="row">
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Children")}>Children</button></div>
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Classics")}>Classics</button> </div>
            </div>
            <div className="row">
                <div className = "column" id = "category"><button type="button" onClick={() => randomByCategory("Comedy")}>Comedy</button></div>
                <div className = "column" id = "category"><button type="button" onClick={() => randomByCategory("Documentary")}>Documentary</button></div>
            </div>
            <div className="row">
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Drama")}>Drama</button> </div>
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Family")}>Family</button></div>
            </div>
            <div className="row">
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Foreign")}>Foreign</button></div>
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Games")}>Games</button></div>
            </div>
            <div className="row">
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Horror")}>Horror</button></div>
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Music")}>Music</button></div>
            </div>
            <div className="row">
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("New")}>New</button></div>
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Sci-Fi")}>Sci-Fi</button></div>
            </div>
            <div className="row">
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Sports")}>Sports</button></div>
                <div className = "column" id = "category" ><button type="button" onClick={() => randomByCategory("Travel")}>Travel</button></div>
            </div>
        </div>
        
       <br/><br/><br/>
    </React.Fragment>
  )
}

// Random Film by Category
function randomByCategory(category){
    
    let filmDiv = document.getElementById("randomFilm");
    console.log(`http://localhost:8080/filmRandomizer/film/randomByCategory/${category}`);
    fetch(`http://localhost:8080/filmRandomizer/film/randomByCategory/${category}`)
    .then(res => res.json())
    .then(film=> {
        if (film.title != null){
            filmDiv.innerHTML = `<h2>${film.title}</h2><p>${film.description} <p/>`
            } else {
                filmDiv.innerHTML = `<h2>No Matching Film</h2>`
            }
    });
}
