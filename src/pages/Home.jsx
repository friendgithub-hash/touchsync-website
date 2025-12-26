import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Users, Zap, Shield, ChevronRight } from 'lucide-react';
import { products, solutions } from '../data/products';
import ProductCard from '../components/ProductCard';
import hero from '../assets/hero.png';
import './Home.css';

const Home = () => {
    const featuredProducts = products.slice(0, 6);

    const stats = [
        { value: '50+', label: 'Product Models' },
        { value: '100+', label: 'Countries Served' },
        { value: '10K+', label: 'Installations' },
        { value: '24/7', label: 'Support' },
    ];

    const features = [
        {
            icon: <Monitor size={32} />,
            title: '4K UHD Resolution',
            description: 'Crystal-clear visuals with stunning 4K and 8K display options for every application.',
        },
        {
            icon: <Users size={32} />,
            title: 'Multi-touch Collaboration',
            description: 'Up to 50-point touch enabling multiple users to interact simultaneously.',
        },
        {
            icon: <Zap size={32} />,
            title: 'Smart Integration',
            description: 'Seamless connectivity with wireless casting, video conferencing, and cloud services.',
        },
        {
            icon: <Shield size={32} />,
            title: 'Enterprise Security',
            description: 'Dual-system support with enhanced security features for sensitive environments.',
        },
    ];

    return (
        <main className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__bg">
                    <img src={hero} alt="Interactive Display" />
                    <div className="hero__overlay"></div>
                </div>
                <div className="hero__content container">
                    <div className="hero__text">
                        <span className="hero__badge">Next-Gen Interactive Displays</span>
                        <h1 className="hero__title">
                            Transform How You
                            <span className="text-gradient"> Collaborate</span>
                        </h1>
                        <p className="hero__description">
                            From boardrooms to classrooms, TouchSync delivers premium interactive
                            display solutions that empower seamless collaboration and engagement.
                        </p>
                        <div className="hero__actions">
                            <Link to="/products" className="btn btn-primary btn-lg">
                                Explore Products <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                Request Demo
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hero__scroll">
                    <span>Scroll to explore</span>
                    <div className="hero__scroll-line"></div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats">
                <div className="container">
                    <div className="stats__grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stats__item">
                                <span className="stats__value">{stat.value}</span>
                                <span className="stats__label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features section">
                <div className="container">
                    <div className="features__header text-center">
                        <h2 className="section-title">Why Choose TouchSync</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Industry-leading technology designed for modern collaboration and engagement
                        </p>
                    </div>
                    <div className="features__grid">
                        {features.map((feature, index) => (
                            <div key={index} className="features__item glass">
                                <div className="features__icon">{feature.icon}</div>
                                <h3 className="features__title">{feature.title}</h3>
                                <p className="features__description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="home-products section">
                <div className="container">
                    <div className="home-products__header">
                        <div>
                            <h2 className="section-title">Featured Products</h2>
                            <p className="section-subtitle">
                                Discover our range of interactive displays for every application
                            </p>
                        </div>
                        <Link to="/products" className="btn btn-secondary">
                            View All Products <ChevronRight size={18} />
                        </Link>
                    </div>
                    <div className="home-products__grid">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="home-solutions section">
                <div className="container">
                    <div className="home-solutions__header text-center">
                        <h2 className="section-title">Solutions for Every Industry</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Tailored display solutions designed for your specific needs
                        </p>
                    </div>
                    <div className="home-solutions__grid">
                        {solutions.map((solution) => (
                            <div key={solution.id} className="home-solutions__card card">
                                <div className="home-solutions__image">
                                    <img src={solution.image} alt={solution.title} />
                                </div>
                                <div className="home-solutions__content">
                                    <h3>{solution.title}</h3>
                                    <p>{solution.description}</p>
                                    <Link to={`/solutions#${solution.id}`} className="home-solutions__link">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta section">
                <div className="container">
                    <div className="cta__content glass">
                        <h2>Ready to Transform Your Space?</h2>
                        <p>
                            Contact our team of experts to find the perfect display solution for your needs.
                        </p>
                        <div className="cta__actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Get a Quote <ArrowRight size={20} />
                            </Link>
                            <Link to="/solutions" className="btn btn-secondary btn-lg">
                                Explore Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
