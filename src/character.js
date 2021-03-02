import React, { useEffect, useState } from "react"
// import API from "./api"
// const api = new API

function Character(){
    
    const [characters, setCharacters] = useState({results:[]})
    const [next, setNext] = useState(1)
    useEffect(()=>{

       
          let  getCharacter = async()=>{
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${next}`)
        const data = await response.json()
        
        return setCharacters(data)
    
    }
    
    
     getCharacter()
    
      
     
       
    },[])

    return (
        <div>
      <div className="container">
       { characters.results.map((element)=>
     
       <div className="card" key={element.id}>
       <img className={element.gender ==="Female"? 'green': ""} src= {element.image} style={{width: "240px"}}/>
       </div>
       )}
      
     
      </div>
      {/* <button onClick={()=> {getCharacter()}}>cargar mas</button> */}
      </div>
    )
    
}

export default Character