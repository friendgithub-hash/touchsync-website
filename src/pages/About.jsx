import { Target, Globe, Award, Users } from 'lucide-react';
import hero from '../assets/hero.png';
import './About.css';

const About = () => {
    const values = [
        {
            icon: <Target size={32} />,
            title: 'Innovation',
            description: 'Continuously pushing the boundaries of interactive display technology.',
        },
        {
            icon: <Globe size={32} />,
            title: 'Global Reach',
            description: 'Serving customers across 100+ countries with localized support.',
        },
        {
            icon: <Award size={32} />,
            title: 'Quality',
            description: 'Premium materials and rigorous testing ensure lasting performance.',
        },
        {
            icon: <Users size={32} />,
            title: 'Customer Focus',
            description: 'Building solutions that address real-world collaboration needs.',
        },
    ];

    const milestones = [
        { year: '2010', event: 'Founded in Shenzhen with a vision for interactive education' },
        { year: '2014', event: 'Launched first 4K interactive display series' },
        { year: '2017', event: 'Expanded to enterprise meeting room solutions' },
        { year: '2019', event: 'Introduced AI-powered camera and audio systems' },
        { year: '2022', event: 'Released next-gen Android 13/14 platforms' },
        { year: '2024', event: 'Achieved 100+ country distribution network' },
    ];

    return (
        <main className="about">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero__bg">
                    <img src={hero} alt="About TouchSync" />
                    <div className="about-hero__overlay"></div>
                </div>
                <div className="about-hero__content container">
                    <h1>About TouchSync</h1>
                    <p>
                        Pioneering interactive display solutions that transform how
                        businesses and educators collaborate worldwide.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission section">
                <div className="container">
                    <div className="mission__grid">
                        <div className="mission__content">
                            <h2 className="section-title">Our Mission</h2>
                            <p>
                                At TouchSync, we believe that technology should bring people together,
                                not create barriers. Our mission is to develop innovative interactive
                                display solutions that empower seamless collaboration in any environment.
                            </p>
                            <p>
                                From Fortune 500 boardrooms to primary school classrooms, our products
                                are designed with a singular focus: enhancing communication and
                                productivity through intuitive, reliable technology.
                            </p>
                        </div>
                        <div className="mission__stats">
                            <div className="mission__stat glass">
                                <span className="mission__stat-value">15+</span>
                                <span className="mission__stat-label">Years of Innovation</span>
                            </div>
                            <div className="mission__stat glass">
                                <span className="mission__stat-value">50+</span>
                                <span className="mission__stat-label">Product Lines</span>
                            </div>
                            <div className="mission__stat glass">
                                <span className="mission__stat-value">10M+</span>
                                <span className="mission__stat-label">Users Worldwide</span>
                            </div>
                            <div className="mission__stat glass">
                                <span className="mission__stat-value">500+</span>
                                <span className="mission__stat-label">Global Partners</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values section">
                <div className="container">
                    <div className="values__header text-center">
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="values__grid">
                        {values.map((value, index) => (
                            <div key={index} className="values__item card">
                                <div className="values__icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="timeline section">
                <div className="container">
                    <div className="timeline__header text-center">
                        <h2 className="section-title">Our Journey</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Key milestones in our growth and innovation
                        </p>
                    </div>
                    <div className="timeline__content">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="timeline__item">
                                <div className="timeline__year">{milestone.year}</div>
                                <div className="timeline__dot"></div>
                                <div className="timeline__event glass">
                                    {milestone.event}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence Section */}
            <section className="presence section">
                <div className="container">
                    <div className="presence__content glass">
                        <h2>Global Presence</h2>
                        <p>
                            With headquarters in Shenzhen, China, and distribution partners across
                            North America, Europe, Asia-Pacific, and the Middle East, TouchSync
                            delivers world-class interactive display solutions wherever you need them.
                        </p>
                        <div className="presence__regions">
                            <div className="presence__region">
                                <h4>Americas</h4>
                                <span>USA, Canada, Brazil, Mexico</span>
                            </div>
                            <div className="presence__region">
                                <h4>Europe</h4>
                                <span>UK, Germany, France, Netherlands</span>
                            </div>
                            <div className="presence__region">
                                <h4>Asia-Pacific</h4>
                                <span>China, Japan, Korea, Australia</span>
                            </div>
                            <div className="presence__region">
                                <h4>Middle East & Africa</h4>
                                <span>UAE, Saudi Arabia, South Africa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
