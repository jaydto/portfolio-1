const About = () => {
    const handleDownload = () => {
        // Specify the relative path to the CSV file in the public folder
        const fileUrl = process.env.PUBLIC_URL + '/csv.pdf';

        // Create a temporary link element
        const link = document.createElement('a');

        // Set the download attribute and the file URL
        link.download = 'csv.pdf';
        link.href = fileUrl;

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link from the DOM
        document.body.removeChild(link);
    };
    return ( 
    <div>
        <section className="container about" id="about">
            <div className="main-title">
                <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <h4>Information About me</h4>
                    <p>
                    A Software Engineering graduate with experience in Java, Python, Agile, and a proven track record of delivering projects on time and to high standards. Strong problem-solving and communication skills, with a passion for technology and a desire to continue learning and growing in a dynamic and challenging work environment. Seeking a software engineering role where I can make a meaningful impact and be a valuable asset to the team.
                    </p>
                    <div className="btn-con" onClick={handleDownload}>
                        <a href="/#" className="main-btn">
                            <span className="btn-text">Download CV</span>
                            <span className="btn-icon"><i className="fas fa-download"></i></span>
                        </a>
                        {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                    </div>
                </div>
                <div className="right-about">
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">40+</p>
                            <p className="small-text">Projects <br /> Completed</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">4+</p>
                            <p className="small-text">Years of <br /> experience</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">300+</p>
                            <p className="small-text">Happy <br /> Clients</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">400+</p>
                            <p className="small-text">Customer <br /> reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-stats">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                    <div className="progress-bar">
                        <p className="prog-title">Android Kotlin</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Flutter</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Springboot</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Django/Flask</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">React Native</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Java</p>
                        <div className="progress-con">
                            <p className="prog-text">75%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">javascript</p>
                        <div className="progress-con">
                            <p className="prog-text">75%</p>
                            <div className="progress">
                                <span className="js"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">ReactJS</p>
                        <div className="progress-con">
                            <p className="prog-text">75%</p>
                            <div className="progress">
                                <span className="react"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Laravel</p>
                        <div className="progress-con">
                            <p className="prog-text">87%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Python</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="python"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="stat-title">My Timeline</h4>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2019 - present</p>
                    <h5>Software Engineering<span> - Kisii University</span></h5>
                    <p>
                        Handled the entire software development cycle and related projects
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">May 2022 - August 2022</p>
                    <h5>Software Engineering intern<span> -Beyond Intoch</span></h5>
                    <p>
                        Responsible for development and maintainance of  infrasctructure such as the ERP , POS and Webservers in the orhganization
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">June 2022 - Novemeber 2022</p>
                    <h5>Associate Android Developer<span> - Google Africa Developer Schorlarship</span></h5>
                    <p>
                        Learnt about the general android architecture and intergrated web services in an android application
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">September 2021 - March 2022</p>
                    <h5>Javascript Data Structures and algorithms<span> - Free Code Camp</span></h5>
                    <p>
                      Learnt how to work with javascript as an object oriented programming language and its various features such as higher order functions
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">May 2021 - October 2021</p>
                    <h5>Flask/Django Python<span> - Great Learning</span></h5>
                    <p>
                        Built web applications with the flask framework built on python
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2017 - present</p>
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