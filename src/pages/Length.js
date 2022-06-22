import React from 'react'


export default function Length() {
  return (
    <React.Fragment>
    <p>Enter what length you want (in minutes) and press Go!.</p>
    <input id="length" type="text" placeholder="100"/> <button type="button" id="randomByLength" onClick={randomByLength}>Go!</button>
    </React.Fragment>
  )
}

// Random Film by Length
function randomByLength(){
  let length = document.getElementById("length").value;
  let filmDiv = document.getElementById("randomFilm");
  
  console.log(`https://program-1655722794469.azurewebsites.net/filmRandomizer/film/randomByLength/${length}`);
  fetch(`https://program-1655722794469.azurewebsites.net/filmRandomizer/film/randomByLength/${length}`)
  .then(res => res.json())
  .then(film=> {
    if (film.title != null){
            filmDiv.innerHTML = `<h2>${film.title}</h2><p>${film.description} <p/>`
            } else {
                filmDiv.innerHTML = `<h2>No Matching Film</h2>`
            }
  });
  }
