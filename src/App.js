import {useEffect} from "react";

//7b3ef90c
const API_URL = ' http://www.omdbapi.com?apikey=7b3ef90c'
const App = () =>{
    const searchMovies = async(title) =>{
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json()

            console.log(data)
    }
    useEffect(()=>{
        searchMovies('Spiderman');
        
    },[])
    return(

         <h1>Hello there</h1>

       
    );
}

export default App;