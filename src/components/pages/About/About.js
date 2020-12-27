import React from "react";
import './About.css';
import abImg from './../../../images/ZZ0001.png';
import { aboutData } from '../../data';


const About = () => {
    return(
        <div id="about" className='About' >
            <div className="sec-container">
                    <p className="section-name">About</p>
                    <div className="content-line">
                    </div>
            <div className="about-body">
                <div className="about-img">
                    <img src={abImg} alt=""/>
                </div>
                <div className="about-content">
                    <ul>
                        {
                            aboutData.map(({ id, title }) => (
                            <li key={`key-${id}`}>
                                    {title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About
