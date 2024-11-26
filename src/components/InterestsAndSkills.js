import React, {useLayoutEffect} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Interests = () => {

    useLayoutEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills__title",
                invalidateOnRefresh: true,
                // markers: true,
                // start: "top center"
            }
        });

        tl.fromTo(".skills__title", {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 0.5})
        tl.to(".skills", {
            opacity: 1,
            y: 0,
            // duration: 1,
            stagger:{
                each: 0.2,
                ease: "Power4.in"
            },
            
        }, "-=0.1")
        tl.to(".intrests__hoverUp", {
            opacity: 1,
            y: 0,
            stagger: {
                each: 0.2,
                ease: "Power4.in"
            }
        }, "-=2.8")

        return () => tl.scrollTrigger.kill();
    })

    return (
        <div className="intrests_skillset">
            <div className="skillset">
                <h3 className="skills__title">TECHNOLOGIES USED</h3>
                {/* <h2 className="skills skills__text">I have a unique set of skills where I combine.... </h2> */}
                <br />
                <h2 className="skills">React</h2>
                <hr className="skills" />
                <h2 className="skills">GSAP</h2>
                <hr className="skills" />
                <h2 className="skills">HTML5</h2>
                <hr className="skills" />
                <h2 className="skills">CSS3</h2>
                <hr className="skills" />
                <h2 className="skills">JavaScript</h2>
                <hr className="skills" />
                <h2 className="skills">Typescript</h2>
                <hr className="skills" />
                <h2 className="skills">Jest</h2>
                <hr  className="skills"/>
            </div>

            <div className="intrests">
                <div>
                <h3 className="intrests__hoverUp intrests__title">ABOUT ME</h3>
                {/* <h2 className="intrests__hoverUp"> During my time as a software developer I have been able to graner experience about  </h2> */}
                <h2 className="intrests__hoverUp">I enjoy bringing designers' work to life; whenever I see a prototype, I think to myself, "How would I go about implementing this?"</h2>
                
                <h2 className="intrests__hoverUp">
                    <a href="https://medium.com/@saleemjibril" target="_blank" rel="noreferrer">
                    <span className="link3">
                        I also love to write about the technologies I learn about and my experience learning them.
                    </span>
                    </a>
                </h2>
                <h2 className="intrests__hoverUp">I am currently exploring animations and SVGs and am excited to see where it takes me.</h2>
                </div>
                <br />
                <br />
                <div>
                    <h3 className="intrests__hoverUp intrests__title">INTERESTS</h3>
                    <h2 className="intrests__hoverUp">Frontend development, Animation, Web3, Football, Music. </h2>
                </div>
            </div>
        </div>
    )
}

export default Interests;