import React, {useState} from "react";
import './Navbar.css'
import logo from '../images/Business Card 1.png';
import menu1 from '../images/Component 15 – 5.png';
import menu from '../images/Component 15 – 1.png';
import logo3 from './../images/Component 3 – 1.png';
import logo4 from './../images/Icon awesome-instagram.png';
import logo5 from './../images/Icon awesome-facebook-f.png';
import { Link } from "react-scroll";
import { navLinks } from './data'


const  Navbar = () => {

    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        spy={true}
                        smooth={true}
                        duration={500}
                        to="home"
                        className="navbar-logo"
                        onClick={() => closeMobileMenu()}
                    >
                        <img src={logo} alt=""/>
                    </Link>

                    <div className="menu-icon">
                        <ul className={click ? 'nav-menu' : 'active1' }>
                            {navLinks.map(({ to, id, title }) => (
                                <li key={`key-${id}`} className="nav-links">
                                    <Link
                                        key={`key-${id}`}
                                        to={to}
                                        className={"menu-scr"}
                                        // className={i === order ? 'active' : ''}
                                        // activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        duration={2000}
                                        offset={-85}
                                        onClick={() => closeMobileMenu()}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div onClick={handleClick} className="menu-logo">
                            <img src={click ? menu1 : menu } alt=""/>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="navbar-bottom">
                <div className="navbar-container navbar-container-bottom">
                    <div className="logo-left">
                        <img src={logo3} alt=""/>
                    </div>
                    <div className="logo-right">
                        <div className='soc-icon soc-icon-inst'>
                            <Link to='/' >
                                <img src={logo4} alt=""/>
                            </Link>
                        </div>
                        <div className="soc-icon soc-icon-fb">
                            <Link to='/' >
                                <img src={logo5} alt=""/>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
