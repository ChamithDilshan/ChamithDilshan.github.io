import { useLocation } from 'react-router-dom';
import './AnimatedBackground.css';

export default function AnimatedBackground() {
    const location = useLocation();
    const isLifePage = location.pathname === '/life';

    return (
        <div className={`animated-bg ${isLifePage ? 'animated-bg--life' : ''}`} aria-hidden="true">
            <div className="animated-bg__orb animated-bg__orb--1" />
            <div className="animated-bg__orb animated-bg__orb--2" />
            <div className="animated-bg__orb animated-bg__orb--3" />
            <div className="animated-bg__orb animated-bg__orb--4" />
            <div className="animated-bg__grid" />
        </div>
    );
}
