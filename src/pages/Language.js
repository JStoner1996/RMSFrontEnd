import React from 'react'
export default function Language() {

  return (
    <React.Fragment>
        <p>Click which language you want.</p>
        
        <div id="centerdiv">
            <div className="row">
                <div className="column"><button type="button" id = "language" onClick={() => randomByLanguage("English")}>English</button></div>
                <div className="column"><button type="button" id = "language" onClick={() => randomByLanguage("Italian")}>Italian</button></div>
                <div className="column"><button type="button" id = "language" onClick={() => randomByLanguage("Japanese")}>Japanese</button></div>
            </div>
            
            <div className="row">
                <div className="column"><button type="button" id = "language" onClick={() => randomByLanguage("Madarin")}>Mandarin</button></div>
                <div className="column"><button type="button" id = "language" onClick={() => randomByLanguage("French")}>French</button></div>
                <div className="column"><button type="button" id = "language" onClick={() => randomByLanguage("German")}>German</button></div>
            </div>
        </div>
    </React.Fragment>
  )
}

// Random Film by Language
function randomByLanguage(language){
    console.log(language);
        
        let filmDiv = document.getElementById("randomFilm");
        console.log(`http://localhost:8080/filmRandomizer/film/randomByLanguage/${language}`);
        fetch(`http://localhost:8080/filmRandomizer/film/randomByLanguage/${language}`)
        .then(res => res.json())
        .then(film=> {
            if (film.title != null){
            filmDiv.innerHTML = `<h2>${film.title}</h2><p>${film.description} <p/>`
            } else {
                filmDiv.innerHTML = `<h2>No Matching Film</h2>`
            }
        });
    }
