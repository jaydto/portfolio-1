const Home = () => {
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
        <header className="container header active" id="home">
            <div className="header-content">
                <div className="left-header">
                    <div className="h-shape"></div>
                    <div className="image">
                        <img src="img/passport.jpg" alt=""/>
                    </div>
                </div>
                <div className="right-header">
                    <h1 className="name">
                        Hi, I'm <span>John Chege.</span>
                        <br/>
                        A Software Engineer.
                    </h1>
                    <p>
                
 🚀 I'm a well-rounded software engineer with a dynamic toolkit, ready to conquer the realms of frontend, backend, mobile, and even sprinkle in some DevOps magic.

Backend Sorcery: 💻 In the backend enchantment, I wield the powers of Spring Boot, Laravel, Flask, Django, and Express, crafting robust APIs and server-side wonders.

Frontend Alchemy: 🎨 On the frontend canvas, I orchestrate dazzling user experiences with Vue, React, and Angular, turning pixels into captivating interfaces.

Mobile Wizardry: 📱 In the mobile arena, I'm fluent in the languages of Android – Java and Kotlin, dance through the cross-platform symphony with Flutter, and surf the waves of versatility with React Native.

DevOps Enchantment: ☁️ I don the DevOps hat, orchestrating seamless deployment and automation with tools like Docker, Kubernetes, and CI/CD pipelines. Ensuring your creations smoothly transition from code to deployment.

From bits and bytes to user delight, I'm here to make your tech dreams come true across the entire development spectrum. Ready for a journey where innovation meets expertise? Let's embark on this coding adventure together! 🌟🚀

                    </p>
                    <div className="btn-con" onClick={handleDownload}>
                        <a href="/#" className="main-btn">
                            <span className="btn-text">Download CV</span>
                            <span className="btn-icon"><i className="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
            </div>
         </header>
        </div>
     );
}
 
export default Home;
