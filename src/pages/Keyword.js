import React from 'react'


export default function Keyword() {
  return (
    <React.Fragment>      
      <p>Enter your keyword and click Go!.</p>
      <input id="keyword" type="text" placeholder="Keyword"/> <button  type="button" id="randomByKeyword" onClick={randomByKeyword}>Go!</button>
    </React.Fragment>
  )
}


// Random Film by Keyword
function randomByKeyword(){
  let word = document.getElementById("keyword").value;
  let filmDiv = document.getElementById("randomFilm");
  
  console.log(`https://program-1655722794469.azurewebsites.net/filmRandomizer/film/randomByKeyword/${word}`);
  fetch(`https://program-1655722794469.azurewebsites.net/filmRandomizer/film/randomByKeyword/${word}`)
  .then(res => res.json())
  .then(film=> {
    if (film.title != null){
            filmDiv.innerHTML = `<h2>${film.title}</h2><p>${film.description} <p/>`
            } else {
                filmDiv.innerHTML = `<h2>No Matching Film</h2>`
            }
  });
  }