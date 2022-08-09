import './styles/styles.scss'
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import gsap from 'gsap';
import { React, useLayoutEffect } from 'react';


function App() {
  const tl = gsap.timeline();

  useLayoutEffect(() => {

    tl.fromTo("header", {y: -100, visibility: "visible"}, {y: 0, visibility: "visible", duration: 1.5, delay: 1})

    tl.to('.about__title', {
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "Power4.easeIn",
        // delay: 1
    }, "-=1")
    tl.to('.about__inner-slant', {
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "Power4.easeIn"
    }, "-=1.3")
    tl.to('.about__inner', {
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'Power4.easeIn'
    }, "-=1.45")
    tl.to(".arrowDown", {
        y: 20,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        delay: 0.5,
        ease: 'Power4.easeIn',
    })
    if(window.matchMedia('(min-width: 1084px)')) {
        tl.to(".title__inner",{
            fontSize: "17vw",
            duration: 1,
            // transition: "2s",
            // ease: 'Power4.easeIn',
        }, "-=1")
        tl.to(".bitmoji", {
            position: "relative",
            // opacity: 1,
            // transition: "2s",
            duration: 0.5
        })
        tl.to(".bitmoji", {
            // position: "relative",
            opacity: 1,
            // transition: "2s",
            duration: 1
        })
    }else{
        return () => tl.scrollTrigger.kill()
    }

}, [])

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
