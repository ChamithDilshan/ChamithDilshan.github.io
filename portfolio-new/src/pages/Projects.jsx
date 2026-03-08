import ScrollReveal from '../components/ScrollReveal';
import GlassCard from '../components/GlassCard';
import projects from '../data/projects';
import './Projects.css';

export default function Projects() {
    return (
        <div className="page-wrapper">
            <section className="page-header">
                <h1 className="page-header__title gradient-text">Projects</h1>
                <p className="page-header__subtitle">A showcase of my work</p>
            </section>

            <section className="section">
                <div className="projects-grid">
                    {projects.map((project, index) => (
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
            </section>
        </div>
    );
}
