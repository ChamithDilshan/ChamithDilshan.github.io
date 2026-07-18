import { useState } from 'react';
import { FiDownload, FiMail, FiArrowRight, FiExternalLink, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import GlassCard from '../components/GlassCard';
import projects from '../data/projects';
import blogs from '../data/blogs';
import { aboutContent } from '../data/profile';
import './Home.css';

function PublicationCard({ title, authors, abstract, conference, readUrl, readText, projectLink }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const shouldTruncate = abstract.length > 200;
    const displayedAbstract = isExpanded || !shouldTruncate
        ? abstract
        : `${abstract.slice(0, 200)}...`;

    return (
        <div className="publication glass">
            <h3 className="publication__title">{title}</h3>
            <p className="publication__authors">
                <strong>Authors:</strong> {authors}
            </p>
            <p className="publication__abstract">
                {displayedAbstract}
                {shouldTruncate && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--accent-blue)',
                            cursor: 'pointer',
                            padding: 0,
                            font: 'inherit',
                            fontWeight: '600',
                            textDecoration: 'underline',
                            marginLeft: '8px'
                        }}
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                )}
                {projectLink && (
                    <Link to={projectLink} style={{ marginLeft: '12px', color: 'var(--accent-blue)', fontWeight: '600', textDecoration: 'underline' }}>
                        See Project
                    </Link>
                )}
            </p>
            <div className="publication__meta">
                <span className="publication__conf">{conference}</span>
                <a
                    href={readUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication__link"
                >
                    {readText} <FiExternalLink size={14} />
                </a>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            {/* ===== HERO ===== */}
            <section className="hero" id="home">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Hi, I'm <span className="gradient-text">Chamith Ranathunga</span>
                    </h1>
                    <p className="hero__subtitle">
                        <span className="hero__subtitle-role">PhD Researcher, NeuroBionics Lab</span>
                        <span className="hero__subtitle-divider"> | </span>
                        <span className="hero__subtitle-org">The University of Melbourne</span>
                    </p>
                    <div className="hero__actions">
                        <button
                            onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn btn--primary"
                            style={{ border: 'none', cursor: 'pointer', font: 'inherit' }}
                        >
                            View Publications <FiArrowRight size={16} />
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn btn--glass"
                            style={{ border: 'none', cursor: 'pointer', font: 'inherit' }}
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
                <div className="hero__visual">
                    <div className="hero__photo-wrapper">
                        <img src="./images/chamith.jpg" alt="Chamith Ranathunga" className="hero__photo" />
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="hero__scroll-down" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                    <div className="scroll-arrows">
                        <FiChevronDown className="scroll-arrow scroll-arrow--first" size={24} />
                        <FiChevronDown className="scroll-arrow scroll-arrow--second" size={24} />
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
                            {aboutContent}
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ===== PUBLICATIONS ===== */}
            <section className="section" id="publications">
                <ScrollReveal>
                    <div className="section-divider" />
                    <h2 className="section-title">Publications</h2>
                </ScrollReveal>
                <div className="publications-list">
                    <ScrollReveal delay={100}>
                        <PublicationCard
                            title="Real-world clinical validation of brainstem-based ocular biomarkers for ADHD classification in children and adults"
                            authors="Chamith Ranathunga, August Romeo, Elizabeth Kilbey & Hans Supèr"
                            abstract="Current ADHD diagnostic practices rely on subjective rating scales and continuous performance tests with limited specificity. We propose an objective deep-learning approach classifying ADHD via task-evoked pupil diameter and binocular eye-movement synchrony during a visual cueing task in 439 participants across 14 clinical centers. We implemented two independent models: a multiple instance learning (MIL) framework for pupil dynamics and conventional classifiers for eye-movement synchrony. The outputs of these models were fused to derive two novel indices, a diagnostic score and an impulsivity score. Using a three-zone policy (healthy, ADHD, uncertain) to manage diagnostic uncertainty, pediatric cross-validation (N=324) yielded diagnostic and impulsivity sensitivities of 0.79 and 0.74, and specificities of 0.82 and 0.70. Adult external testing (N=115) achieved specificities of 0.86 and 0.92, with sensitivities of 0.66 and 0.68. Explainable AI confirmed predictions are driven by increasing pupil responses immediately following cue and stimulus onsets. Statistical projections estimate that integrating this tool with standard rating scales can optimize diagnostic pathways, yielding 95% sensitivity in a screening mode or 96% specificity in a confirmation mode. These physiologically grounded biomarkers reliably quantify cognitive impairments, offering a robust tool to reduce subjective clinical bias."
                            conference="📄 Published in Scientific Reports (Nature) 2026"
                            readUrl="https://www.nature.com/articles/s41598-026-56036-0"
                            readText="Read on Nature"
                        />
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <PublicationCard
                            title="Real-Time AI-Driven People Tracking and Counting Using Overhead Cameras"
                            authors="Ishrath Ahamed, Chamith Dilshan Ranathunga, Dinuka Sandun Udayantha, Benny Kai Kiat Ng, Chau Yuen"
                            abstract="Accurate people counting in smart buildings and intelligent transportation systems is crucial for energy management, safety protocols, and resource allocation. This is especially critical during emergencies, where precise occupant counts are vital for safe evacuation."
                            conference="📄 Accepted at IEEE TENCON 2024"
                            readUrl="https://arxiv.org/abs/2411.10072"
                            readText="Read on ArXiv"
                            projectLink="/projects/overhead-people-counter"
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== FEATURED PROJECTS ===== */}
            <section className="section" id="projects">
                <ScrollReveal>
                    <div className="section-divider" />
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Highlights of my research and engineering projects</p>
                </ScrollReveal>
                <div className="cards-grid">
                    {projects.slice(0, 3).map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 100}>
                            <GlassCard
                                title={project.title}
                                description={project.shortDescription}
                                link={`/projects/${project.id}`}
                                tag={project.tag}
                                icon={project.icon}
                            />
                        </ScrollReveal>
                    ))}
                </div>
                <ScrollReveal delay={300}>
                    <div className="section-actions" style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-2xl)' }}>
                        <Link to="/projects" className="btn btn--primary">
                            View All Projects <FiArrowRight size={16} />
                        </Link>
                    </div>
                </ScrollReveal>
            </section>

            {/* ===== LATEST BLOGS ===== */}
            <section className="section" id="blogs">
                <ScrollReveal>
                    <div className="section-divider" />
                    <h2 className="section-title">Latest Blogs</h2>
                    <p className="section-subtitle">Insights and writings on technology and research</p>
                </ScrollReveal>
                <div className="cards-grid">
                    {blogs.slice(0, 3).map((blog, index) => (
                        <ScrollReveal key={blog.id} delay={index * 100}>
                            <GlassCard
                                title={blog.title}
                                description={blog.shortDescription}
                                link={`/blogs/${blog.id}`}
                                tag="Blog"
                            />
                        </ScrollReveal>
                    ))}
                </div>
                <ScrollReveal delay={300}>
                    <div className="section-actions" style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-2xl)' }}>
                        <Link to="/blogs" className="btn btn--primary">
                            Read All Blogs <FiArrowRight size={16} />
                        </Link>
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
                        <p className="contact__description">
                            You can pass your message to my AI assistant or feel free to reach out directly.
                        </p>
                        <div className="contact__methods">
                            <div className="contact__method">
                                <span className="contact__label">Academic & Research Inquiries</span>
                                <a href="mailto:r.ranathunga@student.unimelb.edu.au" className="btn btn--glass">
                                    <FiMail size={16} /> r.ranathunga@student.unimelb.edu.au
                                </a>
                            </div>
                            <div className="contact__method">
                                <span className="contact__label">General & Engineering Inquiries</span>
                                <a href="mailto:chamithdilshan5465@gmail.com" className="btn btn--glass">
                                    <FiMail size={16} /> chamithdilshan5465@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </>
    );
}
