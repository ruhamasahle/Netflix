import './Row.css'
import React, { useEffect } from 'react'
import axios from './axios'
import { useState } from 'react'

function Row({fetchUrl, title, isLargeRow=false}) {
    const [movies, setMovies]= useState([])
    const baseURL = "https://image.tmdb.org/t/p/original"
    useEffect(()=>{
        async function fetchData(){
           const request = await axios.get(fetchUrl);
           setMovies(request.data.results)
           return request
        }
        fetchData()

    },[fetchUrl])
    console.log(movies)
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
        {movies?.map((movie) =>(
            // Add checks he to avoid null links.

            // (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) && 
                
            <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
            key={movie.id}  
            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
            
        // ))
        
        ))}
        </div>
       </div>
  )
}

export default Row