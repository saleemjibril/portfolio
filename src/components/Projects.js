import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


const Projects = () => {

    useLayoutEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".project__hr",
                invalidateOnRefresh: true,
                // markers: true
            }
        });

        tl.to(".project__hr", {
            opacity: 1,
            stagger: {
                each: 1.2,
                ease: "Power4.in"
            }
        })
    })



    return (
        <div className="marquee">
            <h3 className="titlesLL ">Projects</h3>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr />
            </div>

            <a href="https://firstklaz.live/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>FIRSTKLAZ — FIRSTKLAZ — FIRSTKLAZ — FIRSTKLAZ — FIRSTKLAZ — FIRSTKLAZ-</span>
                <span>FIRSTKLAZ — FIRSTKLAZ — FIRSTKLAZ — FIRSTKLAZ — FIRSTKLAZ — FIRSTKLAZ-</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            <a href="https://closecarbon.com/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>CLOSECARBON — CLOSECARBON — CLOSECARBON — CLOSECARBON — CLOSECARBON — CLOSECARBON-</span>
                <span>CLOSECARBON — CLOSECARBON — CLOSECARBON — CLOSECARBON — CLOSECARBON — CLOSECARBON-</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            <a href="https://surebanker.ai/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>SUREBANKER — SUREBANKER — SUREBANKER — SUREBANKER — SUREBANKER — SUREBANKER-</span>
                <span>SUREBANKER — SUREBANKER — SUREBANKER — SUREBANKER — SUREBANKER — SUREBANKER-</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            <a href="https://detty-december.vercel.app/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>DETTY DECEMBER — DETTY DECEMBER — DETTY DECEMBER — DETTY DECEMBER — DETTY DECEMBER — DETTY DECEMBER-</span>
                <span>DETTY DECEMBER — DETTY DECEMBER — DETTY DECEMBER — DETTY DECEMBER — DETTY DECEMBER — DETTY DECEMBER-</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            <a href="https://ccppas.vercel.app/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS-</span>
                <span>CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS — CCPPAS-</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            {/* <a href="https://tinkoko.com/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>TINKOKO MARKETPLACE — TINKOKO MARKETPLACE — TINKOKO MARKETPLACE-</span>
                <span>TINKOKO MARKETPLACE — TINKOKO MARKETPLACE — TINKOKO MARKETPLACE-</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            <a href="http://agent.tinkoko.com/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>TINKOKO AGENT — TINKOKO AGENT — TINKOKO AGENT — TINKOKO AGENT —</span>
                <span>TINKOKO AGENT — TINKOKO AGENT — TINKOKO AGENT — TINKOKO AGENT —</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            <a href="http://digitalnomadvibes.com/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>DIGITAL NOMAD VIBES — DIGITAL NOMAD VIBES — DIGITAL NOMAD VIBES — DIGITAL NOMAD VIBES —</span>
                <span>DIGITAL NOMAD VIBES — DIGITAL NOMAD VIBES — DIGITAL NOMAD VIBES — DIGITAL NOMAD VIBES —</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            <a href="https://deft-daifuku-179240.netlify.app/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>VINEA GLOBAL— VINEA GLOBAL— VINEA GLOBAL— VINEA GLOBAL—</span>
                <span>VINEA GLOBAL— VINEA GLOBAL— VINEA GLOBAL— VINEA GLOBAL—</span>
            </a>
            
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
           */}

            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>

        </div>
    )
}

export default Projects;