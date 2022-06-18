import React from 'react'
import './home.css'
import Header from './header'
import Sec1 from './sec1'
import Sec2 from './sec2'
import Nav from './nav'

function Home() {
    return (
        <div className='home'>
            <Nav cartNum='0' />
            <Header />
            <Sec1 />
            <Sec2 />
        </div>
    )
}

export default Home;