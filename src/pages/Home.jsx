import React from 'react'
import Navbar from '../components/Navbar'
import HomeHeroSection from '../components/HomeHeroSection'
import HomeCardContainer from '../components/HomeCardContainer'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeHeroSection />
            <HomeCardContainer />
            <Footer />
        </>
    )
}

export default Home