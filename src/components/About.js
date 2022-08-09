import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';

const About = () => {

    // const aboutTitle = document.querySelector('.about__title')
    // const tl = gsap.timeline();

    // useLayoutEffect(() => {
    //     tl.to('.about__title', {
    //         'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    //         y: 0,
    //         opacity: 1,
    //         duration: 1.5,
    //         ease: "Power4.easeIn",
    //         delay: 1
    //     })
    //     tl.to('.about__inner-slant', {
    //         'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    //         opacity: 1,
    //         y: 0,
    //         duration: 1.5,
    //         ease: "Power4.easeIn"
    //     }, "-=1.3")
    //     tl.to('.about__inner', {
    //         'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    //         y: 0,
    //         opacity: 1,
    //         duration: 1.5,
    //         ease: 'Power4.easeIn'
    //     }, "-=1.45")
    //     tl.to(".arrowDown", {
    //         y: 20,
    //         duration: 0.5,
    //         repeat: -1,
    //         yoyo: true,
    //         delay: 0.5,
    //         ease: 'Power4.easeIn',
    //     })
    //     if(window.matchMedia('(min-width: 1084px)')) {
    //         tl.to(".title__inner",{
    //             fontSize: "17vw",
    //             duration: 1,
    //             // transition: "2s",
    //             // ease: 'Power4.easeIn',
    //         }, "-=1")
    //         tl.to(".bitmoji", {
    //             position: "relative",
    //             // opacity: 1,
    //             // transition: "2s",
    //             duration: 0.5
    //         })
    //         tl.to(".bitmoji", {
    //             // position: "relative",
    //             opacity: 1,
    //             // transition: "2s",
    //             duration: 1
    //         })
    //     }else{
    //         return () => tl.scrollTrigger.kill()
    //     }
    
    // }, [])


    return (
        <div className="about">
        
            <div className="about__title">
            <span className="bitmoji"><img src="bitmoji.png" /></span><h1 className="title__inner"><span className="frontend">S</span><span className="frontend">A</span><span className="frontend">L</span><span className="frontend">E</span><span className="frontend">E</span><span className="frontend">M</span></h1>
            </div>
            <div className="about__body">
                <div className="about__inner-slant">
                    <h1 className="developer"><span className="frontend">J</span><span className="frontend">I</span><span className="frontend">B</span><span className="frontend">R</span><span className="frontend">I</span><span className="frontend">L</span></h1>
                </div>
                <h3 className="about__inner">
                2 years overall Software Developer experience. 3 months of React. Skilled in solving problems with HTML, CSS, JavaScript, React. Targeting Frontend specific roles. Currently working on an activity monitoring app using React and NodeJS.
                <h3 className="scrollDown">
                    <span className="scroll__text">Scroll Down</span>

                    <img className="arrowDown" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAo0lEQVRIie3SsQ3CMBSE4ROiglEgJa4iEViBhbITVKzBEqRG1D+NkSL0TPKMqZKTLBf2u8+FpTklA1RA5ZlZOo1T3G9jBxZOwJ0ZmBoAbIFdbhkQgE0SkLSWdAH2GeWNpLOk1dDFGuiAo3HWAm1i5g4cxr7GRCzAXf4N+QSyy1NIH/i53ELeQLHyHtJE5BpXl/PThpAaeADPYi83kACEv5RPNy+jHNEwgrxALwAAAABJRU5ErkJggg==" />
                </h3>
                </h3>
                
            </div>
        </div>
    )
}

export default About;