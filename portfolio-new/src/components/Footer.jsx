import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__brand">
                    <span className="footer__logo gradient-text">CD</span>
                    <p className="footer__tagline">Building the future at the intersection of AI & healthcare</p>
                </div>

                <div className="footer__socials">
                    <a href="mailto:chamithdilshan5465@gmail.com" className="footer__social-link" aria-label="Email">
                        <FiMail size={18} />
                    </a>
                    <a href="https://github.com/ChamithDilshan" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
                        <FiGithub size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/chamith-dilshan-ranathunga" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                        <FiLinkedin size={18} />
                    </a>
                </div>

                <div className="footer__copyright">
                    <p>&copy; {new Date().getFullYear()} Chamith Ranathunga | Built with 💻 and ☕</p>
                </div>
            </div>
        </footer>
    );
}
