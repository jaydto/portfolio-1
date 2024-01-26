const Portfolio = () => {



    return ( 
    <div>
         <section className="container" id="portfolio">
            <div className="main-title">
                <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
            </div>
            <p className="port-text">
                Here is some of my work that I've done in various programming languages.
            </p>
            <div className="portfolios">
            <div className="portfolio-item">
                    <div className="image">
                        <img src="./img/beyondvas.png" alt="cashmania" style={{opacity:".5"}}/>
                    </div>
                    <div className="hover-items p-3">
                        <h3 style={{color:'black'}}><strong>Beyond Vas</strong></h3>
                        <p className="text-center p-2">PRSP website, SMS,SHORTCODES, USSD</p>
                        <div className="icons">
                            <a href="https://beyondvas.co/" target="_blank" rel="noreferrer" style={{color:"blue", marginTop:'.5cm'}}>
                                Click to View Project
                            </a>                          
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="./img/betnare.jpeg" alt="betnare" style={{opacity:".5"}}/>
                    </div>
                    <div className="hover-items p-3">
                        <h3 style={{color:'black'}}><strong>Betnare</strong></h3>
                        <p className="text-center p-2">Betting Games Website, casino, fast games, virtual games</p>
                        <div className="icons">
                            <a href="https://betnare.com/" target="_blank" rel="noreferrer" style={{color:"blue", marginTop:'.5cm'}}>
                                Click to View Project
                            </a>                          
                        </div>
                    </div>
                </div>
            
              
                <div className="portfolio-item">
                    <div className="image">
                        <img src="./img/quicksava.jpeg" alt=""/>
                    </div>
                    <div className="hover-items p-3">
                        <h3 style={{color:'black'}}><strong>Quicksava</strong></h3>
                        <p className="text-center p-2">A loans and money lending schemes Website</p>
                        <div className="icons">
                            <a href="https://quicksava.co.ke/" target="_blank" rel="noreferrer" style={{color:"blue", marginTop:'.5cm'}}>
                                Click to View Project
                            </a>                          
                        </div>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="image">
                        <img src="img/netpap.png" alt=""/>
                    </div>
                    <div className="hover-items p-3">
                        <h3 style={{color:'black'}}><strong>Netpap</strong></h3>
                        <p className="text-center p-2">A management and Analysis Dashboard</p>
                        <div className="icons">
                            <a href="#" target="_blank" rel="noreferrer" style={{color:"blue", marginTop:'.5cm'}}>
                                Click to View Project
                            </a>                          
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="img/quicksave.jpeg" alt=""/>
                    </div>
                    <div className="hover-items p-3">
                        <h3 style={{color:'black'}}><strong>Quicksava Flutter App</strong></h3>
                        <p className="text-center p-2">Mobile app Quicksava</p>
                        <div className="icons">
                            <a href="#" target="_blank" rel="noreferrer" style={{color:"blue", marginTop:'.5cm'}}>
                                Click to View Project
                            </a>                          
                        </div>
                    </div>
                </div> 
                <div className="portfolio-item">
                    <div className="image">
                        <img src="img/Logo1.png" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="https://github.com/jaydto" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                 
                <div className="portfolio-item">
                    <div className="image">
                        <img src="img/mobilebetnare.jpeg" alt=""/>
                    </div>
                    <div className="hover-items p-3">
                        <h3 style={{color:'black'}}><strong>Betnare Flutter App</strong></h3>
                        <p className="text-center p-2">Mobile app betnare</p>
                        <div className="icons">
                            <a href="#" target="_blank" rel="noreferrer" style={{color:"blue", marginTop:'.5cm'}}>
                                Click to View Project
                            </a>                          
                        </div>
                    </div>
                </div>              
            </div>
        </section>

    </div> 
    );
}
 
export default Portfolio;