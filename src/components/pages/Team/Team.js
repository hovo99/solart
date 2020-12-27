import React from "react";
import './Team.css';
import ShowAndHide from './ShowElements';

const Team = () => {
 return(
     <div id="team" className='team'>
         <div className="sec-container">
             <p className="section-name">Team</p>
             <div className="content-line">
             </div>
             <ShowAndHide/>
         </div>
     </div>
 )
}
export default Team;
