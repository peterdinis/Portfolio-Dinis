import React from 'react'
import Hero from '../components/home/Hero'
import Info from '../components/home/Info'
import MyProjects from '../components/projects/MyProjects'
import TimeLine from '../components/projects/TimeLine'

function Homepage() {
    return (
        <div>
            <Hero />
            <Info />
            <MyProjects />
            <TimeLine />
        </div>
    )
}

export default Homepage
