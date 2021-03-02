export default class API{

    async getLocation(){
        const response = await fetch(`https://rickandmortyapi.com/api/location`)
        const data = await response.json()
        
        return data
        
    }

    async getEpisodes(){
        const response = await fetch(`https://rickandmortyapi.com/api/episode`)
        const data = await response.json()
        
        return data
        
    }
}


 


