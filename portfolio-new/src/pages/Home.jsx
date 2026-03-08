import { FiDownload, FiMail, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import GlassCard from '../components/GlassCard';
import projects from '../data/projects';
import blogs from '../data/blogs';
import './Home.css';

export default function Home() {
    return (
        <>
            {/* ===== HERO ===== */}
            <section className="hero">
                <div className="hero__content">
                    <div className="hero__badge">Lead AI Engineer @ Braingaze</div>
                    <h1 className="hero__title">
                        Hi, I'm <span className="gradient-text">Chamith Dilshan</span>
                    </h1>
                    <p className="hero__subtitle">
                        Building innovative solutions at the intersection of{' '}
                        <strong>AI</strong> and <strong>Healthcare</strong>
                    </p>
                    <div className="hero__actions">
                        <Link to="/projects" className="btn btn--primary">
                            View Projects <FiArrowRight size={16} />
                        </Link>
                        <a href="#contact" className="btn btn--glass">
                            Get in Touch
                        </a>
                    </div>
                </div>
                <div className="hero__visual">
                    <div className="hero__photo-wrapper">
                        <img src="./images/chamith.jpg" alt="Chamith Dilshan" className="hero__photo" />
                    </div>
                </div>
            </section>

            {/* ===== ABOUT ===== */}
            <section className="section" id="about">
                <ScrollReveal>
                    <div className="section-divider" />
                    <h2 className="section-title">About Me</h2>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                    <div className="about glass">
                        <div className="about__text">
                            <p>
                                Hey there! 👋 I'm Chamith Dilshan from Sri Lanka. Currently, I work as the Lead AI Engineer at{' '}
                                <a href="https://www.braingaze.com" target="_blank" rel="noopener noreferrer">
                                    Braingaze
                                </a>, Spain.
                            </p>
                            <p>
                                I graduated with First Class (Hons) in Biomedical Engineering from the Department of Electronics and
                                Telecommunication Engineering, University of Moratuwa, Sri Lanka. My passion lies in bio signal
                                processing and machine learning, where I focus on creating innovative solutions at the intersection of
                                technology and healthcare.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ===== RECENT POSTS ===== */}
            <section className="section">
                <ScrollReveal>
                    <div className="section-divider" />
                    <h2 className="section-title">Recent Posts</h2>
                    <p className="section-subtitle">Latest projects and writings</p>
                </ScrollReveal>
                <div className="cards-grid">
                    <ScrollReveal delay={100}>
                        <GlassCard
                            title={projects[0].title}
                            description={projects[0].shortDescription}
                            link={`/projects/${projects[0].id}`}
                            tag={projects[0].tag}
                            icon={projects[0].icon}
                        />
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <GlassCard
                            title={blogs[0].title}
                            description={blogs[0].shortDescription}
                            link={`/blogs/${blogs[0].id}`}
                            tag="Blog"
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== PUBLICATIONS ===== */}
            <section className="section" id="publications">
                <ScrollReveal>
                    <div className="section-divider" />
                    <h2 className="section-title">Publications</h2>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                    <div className="publication glass">
                        <h3 className="publication__title">
                            Real-Time AI-Driven People Tracking and Counting Using Overhead Cameras
                        </h3>
                        <p className="publication__authors">
                            <strong>Authors:</strong> Ishrath Ahamed, Chamith Dilshan Ranathunga, Dinuka Sandun Udayantha, Benny
                            Kai Kiat Ng, Chau Yuen
                        </p>
                        <p className="publication__abstract">
                            Accurate people counting in smart buildings and intelligent transportation systems is crucial for energy
                            management, safety protocols, and resource allocation. This is especially critical during emergencies,
                            where precise occupant counts are vital for safe evacuation.{' '}
                            <Link to="/projects/overhead-people-counter">See More</Link>
                        </p>
                        <div className="publication__meta">
                            <span className="publication__conf">📄 Accepted at IEEE TENCON 2024</span>
                            <a
                                href="https://arxiv.org/abs/2411.10072"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="publication__link"
                            >
                                Read on ArXiv <FiExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ===== RESUME ===== */}
            <section className="section" id="resume">
                <ScrollReveal>
                    <div className="section-divider" />
                    <h2 className="section-title">Resume</h2>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                    <div className="resume glass">
                        <p>Download my latest resume to learn more about my experience and skills.</p>
                        <a
                            href="https://drive.google.com/file/d/1lJUI6EF18qLTZSFRHPhfbnNkEKVXVEED/view?usp=share_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--primary"
                        >
                            <FiDownload size={16} /> Download Resume
                        </a>
                    </div>
                </ScrollReveal>
            </section>

            {/* ===== CONTACT ===== */}
            <section className="section" id="contact">
                <ScrollReveal>
                    <div className="section-divider" />
                    <h2 className="section-title">Contact</h2>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                    <div className="contact glass">
                        <p>
                            You can pass your message to my AI assistant or feel free to reach out directly.
                        </p>
                        <a href="mailto:chamithdilshan5465@gmail.com" className="btn btn--glass">
                            <FiMail size={16} /> chamithdilshan5465@gmail.com
                        </a>
                    </div>
                </ScrollReveal>
            </section>
        </>
    );
}
