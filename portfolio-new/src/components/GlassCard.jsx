import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './GlassCard.css';

export default function GlassCard({ title, description, link, icon, tag, delay = 0 }) {
    const CardWrapper = link ? Link : 'div';
    const wrapperProps = link ? { to: link } : {};

    return (
        <CardWrapper
            className="glass-card"
            style={{ animationDelay: `${delay}ms` }}
            {...wrapperProps}
        >
            <div className="glass-card__glow" />
            {tag && <span className="glass-card__tag">{tag}</span>}
            {icon && <div className="glass-card__icon">{icon}</div>}
            <h3 className="glass-card__title">{title}</h3>
            <p className="glass-card__description">{description}</p>
            {link && (
                <span className="glass-card__cta">
                    View Details <FiArrowRight size={14} />
                </span>
            )}
        </CardWrapper>
    );
}
