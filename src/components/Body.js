import React from 'react';
import About from './About';
import Contact from './Contact';
import Contributions from './Contributions';
import InterestsAndSkills from './InterestsAndSkills';
import Projects from './Projects';

const Body = () => {
    return (
        <main>
            <About />
            <Projects />
            <Contributions />
            <hr style={{width: "94vw"}} />
            <InterestsAndSkills />
            <Contact />
        </main>
    )
}

export default Body;