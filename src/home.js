import React, {useEffect, useState} from "react"
import Carousel from 'react-elastic-carousel';
import API from "./api"
const api = new API

function Home(){
    const [characters, setCharacters] = useState({results:[], })
    
    useEffect(()=>{
       
        async function getCharacter(){
            setCharacters(await api.getCharacter())
           
           
        }
        
       getCharacter()
       
    },[])
   
    const breakPoints = [

      {width: "500", itemsToShow: 1},
      {width: "300", itemsToShow: 1},
      {width: "400", itemsToShow: 1},
      {width: "1200", itemsToShow: 3},
   
    ]
    
  
    return(
   

      <Carousel breakPoints = {breakPoints} className="container">
          {characters.results.map((element)=>
      
      <img src={element.image} className={element.status ==="Alive"? "green": "red"} key={element.id}/>
     

      )}

      </Carousel>
    
    )
}

export default Home