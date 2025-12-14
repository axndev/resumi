import React from 'react'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import CallToAction from '../components/CallToAction'

function Home() {
    return (
        <>
            <HeroSection />
            <Features />
            <HowItWorks />
            <CallToAction />
        </>
    )
}

export default Home