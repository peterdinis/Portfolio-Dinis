import React from 'react'
import Hero from '../components/home/Hero'
import Info from '../components/home/Info'
import Knowledge from '../components/projects/Knowledge'
import MyProjects from '../components/projects/MyProjects'
import TimeLine from '../components/projects/TimeLine';
import AppFooter from "../components/shared/AppFooter";

function Homepage() {
    return (
        <div>
            <Hero />
            <Info />
            <MyProjects />
            <TimeLine />
            <Knowledge />
            <AppFooter />
        </div>
    )
}

export default Homepage
