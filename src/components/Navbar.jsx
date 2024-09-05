import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import logo from '../media/logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        if (window.innerWidth < 992) {
            setIsOpen(false); // Chiudi la navbar su mobile
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg1 px-4 px-lg-5 py-3 py-lg-0">
            <NavLink to="/" className="navbar-brand p-0 mb-lg-2 ms-lg-5 ps-lg-5">
                <img src={logo} alt="Logo" className='ps-lg-2' />
            </NavLink>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`navbar-toggler border-0 ${isOpen ? "navbar-togglerOpen" : ""}`} 
                type="button" 
                aria-controls="navbarCollapse"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
            >
                <i className="bi bi-list-nested fs-1 text-a"></i>
            </button>
            <div 
                className={`navbar-collapse ${isOpen ? 'show' : ''}`} 
                id="navbarCollapse"
            >
                <div className="navbar-nav ms-auto me-lg-5 pe-lg-5 py-0">
                    <NavLink 
                        className="nav-item nav-link text3 font2 mb-1 mb-lg-0 mt-1 mt-lg-0" 
                        to="/" 
                        end 
                        onClick={handleLinkClick}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link text3 font2 mb-1 mb-lg-0" 
                        to="/galleryPage" 
                        onClick={handleLinkClick}
                    >
                        Gallery
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link text3 font2 mb-1 mb-lg-0" 
                        to="/chisiamoPage" 
                        onClick={handleLinkClick}
                    >
                        Chi siamo
                    </NavLink>
                    <button className='btn navbtn mb-1 mb-lg-0'>
                        <a 
                            href="https://copacabanahoteldesign.beddy.io/#/(beddy:home)?lang=it" 
                            target="blank" 
                            className="nav-item nav-link text1 font2"
                        >
                            Prenota
                        </a>
                    </button>
                </div>
            </div>
        </nav>
    );
}
