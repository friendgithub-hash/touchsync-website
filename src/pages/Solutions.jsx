import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { solutions } from '../data/products';
import './Solutions.css';

const Solutions = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <main className="solutions-page">
            {/* Hero Section */}
            <section className="solutions-hero">
                <div className="container">
                    <h1>Solutions by Industry</h1>
                    <p>
                        Discover tailored interactive display solutions designed for your
                        specific industry needs and use cases.
                    </p>
                </div>
            </section>

            {/* Solutions List */}
            <section className="solutions-content">
                <div className="container">
                    {solutions.map((solution, index) => (
                        <div
                            key={solution.id}
                            id={solution.id}
                            className={`solution-card ${index % 2 === 1 ? 'solution-card--reverse' : ''}`}
                        >
                            <div className="solution-card__image">
                                <img src={solution.image} alt={solution.title} />
                                <div className="solution-card__overlay"></div>
                            </div>
                            <div className="solution-card__content">
                                <h2>{solution.title}</h2>
                                <p className="solution-card__description">{solution.description}</p>

                                <div className="solution-card__section">
                                    <h4>Recommended Products</h4>
                                    <div className="solution-card__tags">
                                        {solution.recommendedSeries.map((series) => (
                                            <span key={series} className="solution-card__tag">{series}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="solution-card__section">
                                    <h4>Recommended Sizes</h4>
                                    <div className="solution-card__sizes">
                                        {solution.recommendedSizes.map((size) => (
                                            <span key={size} className="solution-card__size">{size}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="solution-card__section">
                                    <h4>Key Features</h4>
                                    <ul className="solution-card__features">
                                        {solution.features.map((feature) => (
                                            <li key={feature}>
                                                <Check size={16} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link to="/contact" className="btn btn-primary">
                                    Get a Quote <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="solutions-cta section">
                <div className="container">
                    <div className="solutions-cta__content glass">
                        <h2>Need a Custom Solution?</h2>
                        <p>
                            Our team of experts can help design a tailored display solution
                            that perfectly fits your unique requirements.
                        </p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Contact Our Team <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Solutions;
