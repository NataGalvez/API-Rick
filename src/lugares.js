import React, { useEffect, useState } from "react"
import API from "./api"
const api = new API

function Location(){
    
    const [locations, setLocations] = useState({results:[] })
    const [arrCitys, setArrCitys] = useState({})
    useEffect(()=>{
       
        async function getLocation(){
            setLocations(await api.getLocation())
           
          
        }
        
       getLocation()
     
     
    },[])
    
   
useEffect(()=>{

    let getArrayCiudades =()=>{
    locations.results.forEach(citys =>{
        if( !arrCitys.hasOwnProperty(citys.type)){
            arrCitys[citys.type]= {
                lugares:[]
                
            }
        }
       setArrCitys( arrCitys[citys.type].lugares.push({
            ciudad: citys.name,
           
        }))
        console.log(arrCitys)
    })
}
getArrayCiudades()
},[])
    
       


    return (
        <div>
           <ul>
            <h1>Planet</h1>
            {/* {arrCitys.Planet.lugares.map((element)=>
            <li>{element.ciudad}</li>
            )} */}
           </ul>
           <ul>
            <h1>Cluster</h1>
            {/* {arrCitys.Cluster.lugares.map((element)=>
            <li>{element.ciudad}</li>
            )} */}
           </ul>
          
           <ul>
            <h1>Dream</h1>
            {/* {arrCitys.Dream.lugares.map((element)=>
            <li>{element.ciudad}</li>
            )} */}
           </ul>
          
          
           
        </div>
        
    )
    
}

export default Location