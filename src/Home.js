const Home = () => {
    return ( 
        <div>
        <header class="container header active" id="home">
            <div class="header-content">
                <div class="left-header">
                    <div class="h-shape"></div>
                    <div class="image">
                        <img src="img/1.jpg" alt=""/>
                    </div>
                </div>
                <div class="right-header">
                    <h1 class="name">
                        Hi, I'm <span>Trevor Ogina.</span>
                        A Software Engineer.
                    </h1>
                    <p>
                I solve complex challenges for enterprises using JavaScript, Python, PHP, and Kotlin. My skills extend beyond coding, encompassing systems integration and interconnections to ensure seamless and efficient operations.

I am eager to contribute my knowledge, skills, and passion to drive innovation and success within your organization.

                    </p>
                    <div class="btn-con">
                        <a href="" class="main-btn">
                            <span class="btn-text">Download CV</span>
                            <span class="btn-icon"><i class="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
            </div>
         </header>
        </div>
     );
}
 
export default Home;
