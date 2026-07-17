import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/projects', label: 'Projects' },
        { to: '/blogs', label: 'Blogs' },
        { to: '/#publications', label: 'Publications' },
        { to: '/#contact', label: 'Contact' },
        { to: '/#resume', label: 'Resume' },
    ];

    const handleNavClick = (e, link) => {
        if (link.to.startsWith('/#')) {
            if (location.pathname === '/') {
                e.preventDefault();
                const id = link.to.replace('/#', '');
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container">

                <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `navbar__link ${isActive && !link.to.startsWith('/#') ? 'navbar__link--active' : ''}`
                            }
                            onClick={(e) => handleNavClick(e, link)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <button
                    className="navbar__toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>
        </nav>
    );
}
