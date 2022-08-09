import React, { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Contributions = () => { 

    // const titleRef = useRef(null);


    useLayoutEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contributions__title",
                invalidateOnRefresh: true,
                // markers: true
            }
        });

        tl.to(".contributions__title", {
            y: 2,
            opacity: 1,
            duration: 1, 
        });
        tl.to(".contributions__text", {
            y: 2,
            opacity: 1,
            duration: 1, 
        }, "-=0.8");

        return () => tl.scrollTrigger.kill()
    }, []);
    
    return (
        <div className="contributions">
            <h3 className="contributions__title">CONTRIBUTIONS</h3>
            <h2 className="contributions__text">I have worked with clients on freelance and full-time basis. On projects ranging from <a href="http://firstklazwrld.com/" target="_blank" rel="noreferrer"><span className="link">an e-commerce app</span></a> to <span className="link">an agro-ecommerce social app</span></h2>
        </div>
    )
}

export default Contributions;