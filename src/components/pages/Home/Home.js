import React from "react";
import './Home.css';
import homeImg from './../../../images/rrr.gif';


const  Home = () => {
    return(
        <div className="home-container" id="home">
            <div className="home-content">
                <h1>solArt</h1>
                <div className="logo-line">
                </div>
                <p className="home-content-slogan">Making SOLutions  as ART</p>
            </div>
            <div className="home-image">
                <img src={homeImg} alt=""/>
            </div>
        </div>
    )
}

export default Home;
