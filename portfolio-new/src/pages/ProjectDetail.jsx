import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import ScrollReveal from '../components/ScrollReveal';
import projects from '../data/projects';
import './ProjectDetail.css';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="page-wrapper">
                <section className="section" style={{ textAlign: 'center', paddingTop: '120px' }}>
                    <h2>Project Not Found</h2>
                    <p>The project you're looking for doesn't exist.</p>
                    <Link to="/projects" className="btn btn--glass" style={{ marginTop: '1rem' }}>
                        <FiArrowLeft /> Back to Projects
                    </Link>
                </section>
            </div>
        );
    }

    const c = project.content;

    return (
        <div className="page-wrapper">
            {/* Header */}
            <section className="detail-header">
                <Link to="/projects" className="detail-header__back">
                    <FiArrowLeft size={16} /> All Projects
                </Link>
                {project.tag && <span className="detail-header__tag">{project.tag}</span>}
                <h1 className="detail-header__title">{project.title}</h1>
                <p className="detail-header__desc">{project.shortDescription}</p>
            </section>

            {/* Content */}
            <section className="section detail-content">
                {/* Videos */}
                {c.videos && c.videos.length > 0 && (
                    <ScrollReveal>
                        <div className="detail-media">
                            {c.videos.map((v, i) => (
                                <div key={i} className="detail-video glass">
                                    <iframe src={v} width="100%" height="360" allow="autoplay" title={`Video ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                )}

                {/* Images (for EarSense) */}
                {c.images && (
                    <ScrollReveal>
                        <div className="detail-images">
                            {c.images.fullProduct && (
                                <img src={`./${c.images.fullProduct}`} alt="Full Product" className="detail-img glass" />
                            )}
                            {c.images.electrodes && (
                                <img src={`./${c.images.electrodes}`} alt="Electrodes" className="detail-img glass" />
                            )}
                            {c.images.drilledTunnels && (
                                <img src={`./${c.images.drilledTunnels}`} alt="Drilled Tunnels" className="detail-img glass" />
                            )}
                        </div>
                    </ScrollReveal>
                )}

                {/* Overview */}
                {c.overview && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>Project Overview</h2>
                            <p>{c.overview}</p>
                        </div>
                    </ScrollReveal>
                )}

                {/* Background */}
                {c.background && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>Background & Objectives</h2>
                            <p>{c.background}</p>
                            {c.objectives && (
                                <ul>
                                    {c.objectives.map((obj, i) => (
                                        <li key={i}>{obj}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </ScrollReveal>
                )}

                {/* Previous Work */}
                {c.previousWork && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>Previous Work</h2>
                            <p>{c.previousWork}</p>
                            {c.previousWorkItems && (
                                <ul>
                                    {c.previousWorkItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </ScrollReveal>
                )}

                {/* Methodology */}
                {c.methodology && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>Methodology</h2>
                            <p>{c.methodology}</p>
                            {c.methodologyItems && (
                                <ul>
                                    {c.methodologyItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </ScrollReveal>
                )}

                {/* Validation (EarSense) */}
                {c.validation && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>{c.validation.title}</h2>
                            <p>{c.validation.intro}</p>
                            <h3>Experimental Design</h3>
                            <p>{c.validation.experimentalDesign}</p>
                            <h3>Data Acquisition</h3>
                            <ul>
                                {c.validation.dataAcquisition.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <h3>Data Processing</h3>
                            <ul>
                                {c.validation.dataProcessing.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <h3>Statistical Analysis</h3>
                            <ul>
                                {c.validation.stats.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <p>{c.validation.conclusion}</p>
                        </div>
                    </ScrollReveal>
                )}

                {/* Signal Processing Image */}
                {c.images && c.images.signalProcessing && (
                    <ScrollReveal>
                        <figure className="detail-figure glass">
                            <img src={`./${c.images.signalProcessing}`} alt="Signal Processing Steps" />
                            <figcaption>Statistical validation steps</figcaption>
                        </figure>
                    </ScrollReveal>
                )}

                {/* BCI */}
                {c.bci && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>{c.bci.title}</h2>
                            <p>{c.bci.description}</p>
                        </div>
                    </ScrollReveal>
                )}

                {/* Results */}
                {c.results && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>Results & Achievements</h2>
                            <ul>
                                {c.results.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                )}

                {/* Device Specs */}
                {c.specs && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>Device Specifications</h2>
                            <ul>
                                {c.specs.map((spec, i) => (
                                    <li key={i}>{spec}</li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                )}

                {/* Recognition */}
                {c.recognition && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>Recognition</h2>
                            <p>{c.recognition}</p>
                            {c.images && c.images.award && (
                                <figure className="detail-figure-inline">
                                    <img src={`./${c.images.award}`} alt="Award" style={{ maxWidth: '400px', borderRadius: 'var(--border-radius-md)' }} />
                                </figure>
                            )}
                        </div>
                    </ScrollReveal>
                )}

                {/* Paper */}
                {c.paper && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>Paper Publication</h2>
                            <p>
                                <strong>{c.paper.title}</strong> — {c.paper.conference}
                            </p>
                            <a href={c.paper.arxiv} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ marginTop: '0.5rem' }}>
                                Read on ArXiv
                            </a>
                        </div>
                    </ScrollReveal>
                )}

                {/* Conclusion */}
                {c.conclusionText && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>Conclusion</h2>
                            <p>{c.conclusionText}</p>
                        </div>
                    </ScrollReveal>
                )}

                {/* Acknowledgements */}
                {c.acknowledgements && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>Acknowledgements</h2>
                            <p>{c.acknowledgements}</p>
                        </div>
                    </ScrollReveal>
                )}

                {/* References */}
                {c.references && (
                    <ScrollReveal>
                        <div className="detail-section glass">
                            <h2>References</h2>
                            <ol>
                                {c.references.map((ref, i) => (
                                    <li key={i} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)' }}>{ref}</li>
                                ))}
                            </ol>
                        </div>
                    </ScrollReveal>
                )}

                {/* Back link */}
                <ScrollReveal>
                    <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
                        <Link to="/projects" className="btn btn--glass">
                            <FiArrowLeft /> Back to Projects
                        </Link>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
