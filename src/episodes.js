import React, { useEffect, useState }  from "react"

import API from "./api"
const api = new API

function Episodes(){

    const [episodes, setEpisodes] = useState({results:[]})
    const [items, setItems] = useState([]);
    const [character, setCharacter] = useState([])
    
  
    useEffect(()=>{
       
        async function getEpisodes(){
            setEpisodes(await api.getEpisodes())
         
        }
      
        setCharacter(  episodes.results.map((element)=> character.push(element.characters)))
       getEpisodes()
       setTimeout( setItems(character.map((item, i)=> items.push(item[i]))), 6000)
      
       console.log(items)
    },[])

   
    return(
        <>
        <ul>
            {episodes.results.map((episode)=>
            
            <li className="list-episodes"key={episode.id}> {episode.episode} {episode.name} </li>
           
            )}
        </ul>
        </>
    )
}
export default Episodes