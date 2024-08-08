/* eslint-disable jsx-a11y/anchor-is-valid */
import profile from "../Assets/Profile1.jpg";
import "../Assets/skills.css";
function Skills(){
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
                    <div className="education">
                        <h1>My <b>Skills</b></h1>
                        <div className="education-info">
                        <div>
                        <p className="skill-h3">Coding &nbsp;<b>Skills</b></p>
                        <div className="skill-bar">
                            <h3 className="skill-h3">HTML5</h3>
                            <div className="emp-skill">
                                <div className="full-skill"><p>100%</p></div>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <h3 className="skill-h3">CSS</h3>
                            <div className="emp-skill">
                                <div className="full-skill"><p>100%</p></div>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <h3 className="skill-h3">Java Script</h3>
                            <div className="emp-skill-js">
                                <div className="full-skill-js"><p>70%</p></div>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <h3 className="skill-h3">React js</h3>
                            <div className="emp-skill-rj">
                                <div className="full-skill-rj"><p>50%</p></div>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <h3 className="skill-h3">Node js </h3>
                            <div className="emp-skill-nj">
                                <div className="full-skill-nj"><p>10%</p></div>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <h3 className="skill-h3">Express Js</h3>
                            <div className="emp-skill-ej">
                                <div className="full-skill-ej"><p>10%</p></div>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <h3 className="skill-h3">Mongo DB</h3>
                            <div className="emp-skill-md">
                                <div className="full-skill-md"><p>10%</p></div>
                            </div>
                        </div>
                        </div>
                        <div className="knowledge">
                            <p>Knowledge</p>
                            <div className="knd-name">
                                <button>Leadership</button>
                                <button>Team Management</button>
                                <button>Problem Solving</button>
                                <button>C</button>
                                <button>C++</button>
                                <button>Java</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
              
            </div> 
        </>
    )
}
export default Skills;