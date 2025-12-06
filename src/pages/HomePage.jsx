import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Experiences />
            <Skills />
            <Contact />
        </>
    );
};

export default HomePage;