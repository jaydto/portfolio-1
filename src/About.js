const About = () => {
    return ( 
    <div>
        <section class="container about" id="about">
            <div class="main-title">
                <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
            </div>
            <div class="about-container">
                <div class="left-about">
                    <h4>Information About me</h4>
                    <p>
                    A Software Engineering graduate with experience in Java, Python, Agile, and a proven track record of delivering projects on time and to high standards. Strong problem-solving and communication skills, with a passion for technology and a desire to continue learning and growing in a dynamic and challenging work environment. Seeking a software engineering role where I can make a meaningful impact and be a valuable asset to the team.
                    </p>
                    <div class="btn-con">
                        <a href="#" class="main-btn">
                            <span class="btn-text">Download CV</span>
                            <span class="btn-icon"><i class="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
                <div class="right-about">
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">20+</p>
                            <p class="small-text">Projects <br /> Completed</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">4+</p>
                            <p class="small-text">Years of <br /> experience</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">300+</p>
                            <p class="small-text">Happy <br /> Clients</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">400+</p>
                            <p class="small-text">Customer <br /> reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-stats">
                <h4 class="stat-title">My Skills</h4>
                <div class="progress-bars">
                    <div class="progress-bar">
                        <p class="prog-title">Android Kotlin</p>
                        <div class="progress-con">
                            <p class="prog-text">80%</p>
                            <div class="progress">
                                <span class="html"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">Java</p>
                        <div class="progress-con">
                            <p class="prog-text">75%</p>
                            <div class="progress">
                                <span class="css"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">javascript</p>
                        <div class="progress-con">
                            <p class="prog-text">75%</p>
                            <div class="progress">
                                <span class="js"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">ReactJS</p>
                        <div class="progress-con">
                            <p class="prog-text">75%</p>
                            <div class="progress">
                                <span class="react"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">Laravel</p>
                        <div class="progress-con">
                            <p class="prog-text">87%</p>
                            <div class="progress">
                                <span class="node"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">Python</p>
                        <div class="progress-con">
                            <p class="prog-text">70%</p>
                            <div class="progress">
                                <span class="python"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="stat-title">My Timeline</h4>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2019 - present</p>
                    <h5>Software Engineering<span> - Kisii University</span></h5>
                    <p>
                        Handled the entire software development cycle and related projects
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">May 2022 - August 2022</p>
                    <h5>IT intern<span> - Maseno University</span></h5>
                    <p>
                        Responsible for maintaining IT infrasctructure such as the ERP and MIS in the institution
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">June 2022 - Novemeber 2022</p>
                    <h5>Associate Android Developer<span> - Google Africa Developer Schorlarship</span></h5>
                    <p>
                        Learnt about the general android architecture and intergrated web services in an android application
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">September 2021 - March 2022</p>
                    <h5>Javascript Data Structures and algorithms<span> - Free Code Camp</span></h5>
                    <p>
                      Learnt how to work with javascript as an object oriented programming language and its various features such as higher order functions
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">May 2021 - October 2021</p>
                    <h5>Flask Python<span> - Great Learning</span></h5>
                    <p>
                        Built web applications with the flask framework built on python
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2017 - present</p>
                    <h5>3d Animation<span> - Brighton University</span></h5>
                    <p>
                        Still learning how to be creative with 3D objects
                    </p>
                </div>
            </div>
        </section>
    </div>
     );
}
 
export default About;