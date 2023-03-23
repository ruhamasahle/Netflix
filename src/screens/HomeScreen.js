import React from 'react'
import './HomeScreen.css'
import Nav from '../nav'
import Banner from '../Banner'
import Row from '../Row'

import requests from '../request'
function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Banner/>
        <Row title= 'NETFlIX Popular'
        fetchUrl={requests.fetchTrending}
        isLargeRow/>

        <Row title= 'NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals} />
        <Row title= 'NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals} />
        <Row title= 'NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals} />
        <Row title= 'NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals} />
        <Row title= 'NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  )
}

export default HomeScreen