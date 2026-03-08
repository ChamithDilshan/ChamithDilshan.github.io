import ScrollReveal from '../components/ScrollReveal';
import GlassCard from '../components/GlassCard';
import blogs from '../data/blogs';
import './Blogs.css';

export default function Blogs() {
    return (
        <div className="page-wrapper">
            <section className="page-header">
                <h1 className="page-header__title gradient-text">Blog</h1>
                <p className="page-header__subtitle">Insights and updates from Chamith</p>
            </section>

            <section className="section">
                <div className="blogs-grid">
                    {blogs.map((blog, index) => (
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
            </section>
        </div>
    );
}
