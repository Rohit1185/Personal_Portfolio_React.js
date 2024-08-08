/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Assets/about.css';
import profile from "../Assets/Profile1.jpg";
import netflix from "../Assets/netflix.jpeg";
import ws from "../Assets/w3.png";
import vishala from "../Assets/vishala.jpg";
import tic from "../Assets/tic_tac.jpg";
import port from "../Assets/port.jpeg"
import food from "../Assets/food.jpg";
function About(){
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
                    <div className="about-main">
                        <h1 className='about-main-h'>About &nbsp; <b>Me</b></h1>
                        <div className="about-info">
                            <div className="about-desc">
                                <p>My name is Rohit Ahir, and I am a full stack developer with a degree in BCA from GLS University. I have completed several projects, showcasing my skills and expertise in both front-end and back-end development.</p>
                            </div>
                            <div className="about-personal-desc">
                                <p><b>Age</b> &nbsp; 19</p>
                                <p><b>Residence</b>&nbsp; INDIA</p>
                                <p><b>Email</b>&nbsp; rohitahir0024@gmail.com</p>
                                <p><b>Contact</b>&nbsp;     +91 9913219791</p>
                            </div>
                        </div>
                        <div className="about-project">
                            <h1 className='about-project-h'>Projects by &nbsp;<b>Me</b></h1>
                            <div className="project">
                                <div className="project-list">
                                    <div className="pro1">
                                        <img src={netflix} alt="" />
                                        <p>Name : <b>Netflix Clone</b></p>
                                        <p>Langugae : <b>HTML,CSS,JS</b></p>
                                        <a href="https://github.com/Rohit1185/Netflix_clone" target="_blank" rel="noreferrer"><button>Source Code</button></a>
                                    </div>
                                    <div className="pro1">
                                    <img src={ws} alt="" />
                                        <p>Name : <b>W3 School</b></p>
                                        <p>Langugae : <b>HTML,CSS,JS</b></p>
                                        <a href="https://github.com/Rohit1185/w3schools1" target="_blank" rel="noreferrer"><button>Source Code</button></a>
                                    </div>
                                    <div className="pro1">
                                    <img src={vishala} alt="" />
                                        <p>Name : <b>Vishala Restaurant</b></p>
                                        <p>Langugae : <b>HTML,CSS,JS</b></p>
                                        <a href="https://github.com/Rohit1185/vishala_restaurant" target="_blank" rel="noreferrer"><button>Source Code</button></a>
                                    </div>
                                </div>
                                <div className="project-list">
                                    <div className="pro1">
                                    <img src={tic} alt="" />
                                        <p>Name : <b>Tic tac toe game</b></p>
                                        <p>Langugae : <b>HTML,CSS,JS</b></p>
                                        <a href="https://github.com/Rohit1185/vishala_restaurant" target="_blank" rel="noreferrer"><button>Source Code</button></a>
                                    </div>
                                    <div className="pro1">
                                    <img src={port} alt="" />
                                        <p>Name : <b>Personal Portfolio</b></p>
                                        <p>Langugae : <b>HTML,CSS,JS</b></p>
                                        <a href="https://github.com/Rohit1185/PortFolio" target="_blank" rel="noreferrer"><button>Source Code</button></a>
                                    </div>
                                    <div className="pro1">
                                    <img src={food} alt="" />
                                        <p>Name : <b>Food Website</b></p>
                                        <p>Langugae : <b>HTML,CSS,JS</b></p>
                                        <a href="https://github.com/Rohit1185/Food_website" target="_blank" rel="noreferrer"><button>Source Code</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> 
        </>   
    )
}
export default About;