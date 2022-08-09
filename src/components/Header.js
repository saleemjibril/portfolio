import React, { useState, useEffect, useLayoutEffect } from 'react'
import Scrollspy from 'react-scrollspy';

const Header = () => {

   
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    })

    return(
        <header>
            <h4 className="header__text">
                FRONTEND<br />
                DEVELOPER
            </h4>
            <h4 className="header__text" style={{textAlign: "center"}}>
                <span>{time}</span>
            </h4>
            <Scrollspy items={['section-1']} currentClassName="is-current">
            <a className="header__link" href="#section-1">
                <h4 className="contactButton header__text">
                    CONTACT
                </h4>
            </a>
            </Scrollspy>
        </header>
    )
}

export default Header;