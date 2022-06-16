import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from './Home'
import Actor from './Actor'
import Category from './Category'
import Keyword from './Keyword'
import Language from './Language'
import Length from './Length'

export default function RouterPage() {
  return (
    <div>
          <Routes>
             <Route path = "/" element = {<Home />} />
             <Route path = "/actor" element = {<Actor />}/> 
             <Route path = "/category" element = {<Category />}/> 
             <Route path = "/keyword" element = {<Keyword />} />
             <Route path = "/language" element = {<Language />} />
             <Route path = "/length" element = {<Length />} />
          </Routes>
   </div>
  )
}
