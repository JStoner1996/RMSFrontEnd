import React from 'react'

export default function actor() {
  return (

    //React.Fragment is used instead of div, to help prevent cluttering the DOM tree 
    <React.Fragment>
        <p>Please choose an Actor's name (First or Last, but not both) and click Go!.</p>
        <input id = "name" type="text" placeholder="Actor"/> <button type="button" onClick={randomByActor}>Go!</button> 
        <br/><br/><br/>
        
  
    </React.Fragment>
  )
}

// Random Film by Actor
function randomByActor(){
  let name = document.getElementById("name").value;
  let filmDiv = document.getElementById("randomFilm"); 
  
  console.log(`http://localhost:8080/filmRandomizer/film/randomByActor/${name}`);
  fetch(`http://localhost:8080/filmRandomizer/film/randomByActor/${name}`)
  .then(res => res.json())
  .then(film=> {
     if (film.title != null){
            filmDiv.innerHTML = `<h2>${film.title}</h2><p>${film.description} <p/>`
            } else {
                filmDiv.innerHTML = `<h2>No Matching Film</h2>`
            }
  });
  }