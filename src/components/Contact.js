import React from 'react'
import Scrollspy from 'react-scrollspy'

const Contact = () => {
    return(
        <div className="contact" id="section-1">
            <>
                <h1 style={{color: "#ccc"}}>Got a project in mind?<br /> Let me bring those ideas to life <br />Feel free to <a href="mailto:saleemjibril5@gmail.com" className="link">reach out</a></h1>
                <br />
                <br />
                <h3 style={{color: "#f28100"}}>With every project I like to dive into the clients mind to see things from thier perspective in order to come up with the perfect app that fits their needs and desires.</h3>
                <h3 style={{color: "#f28100"}}>If you want to chat about a project or collaborations — email me on <span><a className="link" href="mailto:saleemjibril5@gmail.com">saleemjibril5@gmail.com</a></span></h3>
               
            </>
            <hr />
        </div>
    )
}

export default Contact;