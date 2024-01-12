import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Blogs from "./Blogs";
import Contact from "./Contact"

function App() {
  return (
    <div className="App">
       <div className="main-content">
        <Home/>
         <div className="main">
          <About/>
          <Portfolio/>
          <Blogs/>
          <Contact/>
         </div>
        
        <div className="theme-btn">
            <i className="fas fa-adjust"></i>
        </div>
       </div>
    </div>
  );
}

export default App;
