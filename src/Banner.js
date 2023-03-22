import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from './request'
import axios from './axios'

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        // Succesfully fetched movies from TMDB + set desktop bg
        fetchData()
    }, [])

    console.log(movie)
    function truncate(string, num) {
        return string?.length > num ? string.substr(0, num - 1) + '...' : string;
    }
    return (
        <div className='banner'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,

                backgroundSize: 'cover',
                backgroundPosition: "center center"
            }}
        >
            <div>
                <h1 className='banner__contents'>
                    <h1 className='banner__title'> Movie Name</h1>
                    <div className='banner__buttons'>
                        <button className='banner_button'> My List</button>
                        <button className='banner_button'> Play</button>
                    </div>
                    <h1 className='banner_description'>
                        {truncate('This is a test description', 150)}</h1>
                </h1>
            </div>
            <div className='banner--fadeBottom'></div>
        </div>
    )
}

export default Banner