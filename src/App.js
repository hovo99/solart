import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Services from "./components/pages/ Services/Services";
import Team from "./components/pages/Team/Team";

function App() {
  return (

//       <>
//           <Router>
//           <Navbar/>
//       <section className="content">
//         <Home/>
//         </section>
//     <div className="second-path">
//         <section className="content">
//             <Element name="wwd">
//                 <About />
//             </Element>
//         </section>
//     </div>
//           </Router>
// </>



    <>
        <Router>
            <Navbar/>
                <Home/>
                <About/>
                <Services/>
                <Team/>
        </Router>
    </>

  );
}

export default App;
