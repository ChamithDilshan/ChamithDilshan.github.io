import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import ScrollReveal from '../components/ScrollReveal';
import blogs from '../data/blogs';
import './BlogDetail.css';

export default function BlogDetail() {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        return (
            <div className="page-wrapper">
                <section className="section" style={{ textAlign: 'center', paddingTop: '120px' }}>
                    <h2>Blog Not Found</h2>
                    <Link to="/blogs" className="btn btn--glass" style={{ marginTop: '1rem' }}>
                        <FiArrowLeft /> Back to Blogs
                    </Link>
                </section>
            </div>
        );
    }

    return (
        <div className="page-wrapper">
            <section className="blog-header-section">
                <Link to="/blogs" className="detail-header__back">
                    <FiArrowLeft size={16} /> All Blogs
                </Link>
                <h1 className="blog-header__title gradient-text">{blog.title}</h1>
                {blog.subtitle && <p className="blog-header__subtitle">{blog.subtitle}</p>}
            </section>

            <section className="section blog-content">
                <div className="blog-body glass">
                    {blog.content.map((block, i) => {
                        switch (block.type) {
                            case 'text':
                                return (
                                    <ScrollReveal key={i} delay={i * 30}>
                                        <p>{block.value}</p>
                                    </ScrollReveal>
                                );
                            case 'heading':
                                return (
                                    <ScrollReveal key={i} delay={i * 30}>
                                        <h3>{block.value}</h3>
                                    </ScrollReveal>
                                );
                            case 'highlight':
                                return (
                                    <ScrollReveal key={i} delay={i * 30}>
                                        <p className="blog-highlight">{block.value}</p>
                                    </ScrollReveal>
                                );
                            case 'list':
                                const ListTag = block.ordered ? 'ol' : 'ul';
                                return (
                                    <ScrollReveal key={i} delay={i * 30}>
                                        <ListTag>
                                            {block.items.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ListTag>
                                    </ScrollReveal>
                                );
                            default:
                                return null;
                        }
                    })}
                </div>

                <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
                    <Link to="/blogs" className="btn btn--glass">
                        <FiArrowLeft /> Back to Blogs
                    </Link>
                </div>
            </section>
        </div>
    );
}
