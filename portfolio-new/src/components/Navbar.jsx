import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        if (location.pathname !== '/') {
            if (location.pathname.startsWith('/projects')) {
                setActiveSection('projects');
            } else if (location.pathname.startsWith('/blogs')) {
                setActiveSection('blogs');
            } else if (location.pathname.startsWith('/life')) {
                setActiveSection('life');
            } else {
                setActiveSection('');
            }
            return;
        }

        const sectionIds = ['home', 'about', 'publications', 'projects', 'blogs', 'resume', 'contact'];
        
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
                observer.observe(el);
            }
        });

        const handleScrollFallback = () => {
            if (window.scrollY < 100) {
                setActiveSection('home');
            }
        };
        window.addEventListener('scroll', handleScrollFallback);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScrollFallback);
        };
    }, [location.pathname]);

    const navLinks = [
        { to: '/#home', label: 'Home' },
        { to: '/#about', label: 'About' },
        { to: '/#publications', label: 'Publications' },
        { to: '/#projects', label: 'Projects' },
        { to: '/#blogs', label: 'Blogs' },
        { to: '/#resume', label: 'Resume' },
        { to: '/#contact', label: 'Contact' },
        { to: '/life', label: 'Life' },
    ];

    const handleNavClick = (e, link) => {
        if (location.pathname === '/' && link.to.startsWith('/#')) {
            e.preventDefault();
            const id = link.to.replace('/#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(id);

                // Track the custom scroll navigation event in GoatCounter
                if (window.goatcounter && window.goatcounter.count) {
                    window.goatcounter.count({
                        path: link.to,
                        title: `Scroll to ${link.label}`,
                    });
                }
            }
        }
    };

    const isLifePage = location.pathname.startsWith('/life');

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${isLifePage ? 'navbar--life' : ''}`}>
            <div className="navbar__container">
                <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => {
                        const linkId = link.to.replace('/#', '');
                        const isActive = activeSection === linkId;
                        const isLifeLink = link.to === '/life';
                        return (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`navbar__link ${isActive ? 'navbar__link--active' : ''} ${isLifeLink ? 'navbar__link--life' : ''}`}
                                onClick={(e) => handleNavClick(e, link)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
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
