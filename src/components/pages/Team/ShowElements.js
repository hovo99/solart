import React, { useState } from "react";
import { animated } from "react-spring";
import './Team.css';
import Carousel from 'react-elastic-carousel';
import {breakPoints,member} from "../../data";


const ShowAndHide = () => {
    const professions = ["all","Web Developer", "designer","Desktop development" , "seo", "qa"];
    const [myProfession, setMyProfession] = useState("");

    return (
        <>
            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <br />
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        {professions.map(profession => (
                            <button
                                type="button"
                                key={profession}
                                className={"teamMenu"}
                                onClick={() => setMyProfession(profession)}
                            >
                                {profession}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="col text-center">
                    <div className="item">
                        <Carousel breakPoints={breakPoints}>
                            {myProfession === '' &&(
                                member.map(({id,img,text, profession,year}) =>(
                                    <ProfessionImage key={id} src={img} text1={text} text2={profession} text3={year}/>
                                ))
                            )
                            }
                            {myProfession === 'all' &&(
                                member.map(({id,img,text, profession,year}) =>(
                                    <ProfessionImage key={id} src={img} text1={text} text2={profession} text3={year}/>
                                ))
                            )
                            }
                            {myProfession === "Web Developer" && (
                                member.filter(function (person) {
                                    return person.profession ==="Web Developer"

                                }).map(({ id,img,text , profession,year}) =>(
                                    <ProfessionImage key={id} src={img} text1={text} text2={profession} text3={year}/>
                                ) )
                            )}
                            {myProfession === "designer" && (
                                member.filter(function (person) {
                                    return person.profession ==="designer"

                                }).map(({ id,img,text , profession, year}) =>(
                                    <ProfessionImage key={id} src={img} text1={text} text2={profession}  text3={year}/>
                                ) )
                            )}
                            {myProfession === "seo" && (
                                member.filter(function (person) {
                                    return person.profession ==="seo"

                                }).map(({ id,img,text ,profession,year}) =>(
                                    <ProfessionImage key={id} src={img} text1={text} text2={profession} text3={year}/>
                                ) )
                            )}
                            {myProfession === "qa" && (
                                member.filter(function (person) {
                                    return person.profession ==="qa"

                                }).map(({ id,img,text , profession, year}) =>(
                                    <ProfessionImage key={id} src={img} text1={text} text2={profession} text3={year}/>
                                ) )
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
};


const ProfessionImage = (e) => {
    // const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <>
            <div className='card'>
                <animated.img
                    src={e.src}
                    alt=""
                    style={{ width: "250px", height: "250px", opacity: 1 }}
                />
                <p className="p-name">{e.text1}</p>
                <p className="p">{e.text2}</p>
                <p className="p">{e.text3}+ years experience</p>
            </div>
        </>
    );
};

export default ShowAndHide;
