import React from 'react'
const Footer = () => {
    return(
        <footer>
            <div className="social">
                <div className="social__name">
                    <h3 className="social__text__h4">Saleem Jibril</h3>
                </div>
                
                <div className="social__links">
                        <a className="social__links__inner" href="https://www.github.com/thewebplug/" target="_blank" rel="noreferrer">
                            <h4 className="social__text">Github</h4>
                            <img className="social-image" src="/img-arrow.png" width="15" height="15" alt="twitter logo" />
                        </a>
                        <a className="social__links__inner" href="https://www.linkedin.com/in/saleemjibril/" target="_blank" rel="noreferrer">
                            <h4 className="social__text">Linkedin</h4>
                        <img className="social-image" src="/img-arrow.png" width="15" height="15" alt="twitter logo" />
                    </a>
                    <a className="social__links__inner" href="https://medium.com/@saleemjibril" target="_blank" rel="noreferrer">
                        <h4 className="social__text">Medium</h4>
                        <img className="social-image" src="/img-arrow.png" width="15" height="15" alt="twitter logo" />
                    </a>
                    <a className="social__links__inner" href="https://www.twitter.com/saleemjibril/" target="_blank" rel="noreferrer">
                        <h4 className="social__text">Twitter</h4>
                        <img className="social-image" src="/img-arrow.png" width="15" height="15" alt="twitter logo" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;