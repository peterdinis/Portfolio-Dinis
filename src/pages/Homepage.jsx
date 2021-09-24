import React from 'react'
import Hero from '../components/home/Hero'
import Info from '../components/home/Info'
import MyProjects from '../components/projects/MyProjects'

function Homepage() {
    return (
        <div>
            <Hero />
            <Info />
            <MyProjects />
        </div>
    )
}

export default Homepage
