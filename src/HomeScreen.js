import React from 'react'
import './HomeScreen.css'
import Nav from './features/counter/nav'
import Banner from './Banner'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Banner/>
    </div>
  )
}

export default HomeScreen