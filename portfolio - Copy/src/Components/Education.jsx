/* eslint-disable jsx-a11y/anchor-is-valid */
import profile from "../Assets/Profile1.jpg";
import "../Assets/education.css";
function Education(){
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
                        <h1>My <b>Education</b></h1>

                        <div className="edu-info">
                            <h3>Bechlore of Computer Application</h3>
                            <h4>GLS UNIVERSITY</h4>
                            <p>2022-2025</p>
                        </div>

                        <div className="edu-info">
                            <h3>12<sup>th</sup> </h3>
                            <h4>Shreeji Madhymik School</h4>
                            <p>2021-2022</p>
                        </div>

                        <div className="edu-info">
                            <h3>10<sup>th</sup></h3>
                            <h4>Shreeji Madhymik School</h4>
                            <p>2019-2020</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Education;