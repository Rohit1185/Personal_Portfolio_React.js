/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Assets/Portfolio.css';
import profile from "../Assets/Profile1.jpg";


function Portfolio(){
    return(
        <>
            <div className="home-intro">
                <div className="home-name">
                    <div className="home-name-intro">
                        
                        <img src={profile} alt="" />
                        <div className="names">
                            <h1>Rohit Ahir</h1>
                            <p>Full Stack Developer</p>
                            
                        </div>
                        <button id='cv-btn'>Download CV</button>
                        <p>2020 All Rights are Reserved</p>
                    </div>
                    <div className="home-name-name">
                        <span>Rohit Ahir</span>
                        <p>Full Stack Developer</p>
                    </div>
                </div>
                {/* <div className="nav-icons">
                    <a href="" id="home">H</a>
                    <a href="" id="about">A</a>
                    <a href="" id="education">E</a>
                    <a href="" id="skill">S</a>
                    <a href="" id="contact">C</a>
                </div> */}
            </div> 
            {/* <About/> */}
        </>   
    )
}
export default Portfolio;