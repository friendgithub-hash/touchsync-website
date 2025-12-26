import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const industries = [
        'Education (K-12)',
        'Higher Education',
        'Enterprise / Corporate',
        'Retail',
        'Healthcare',
        'Government',
        'Hospitality',
        'Other',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <main className="contact-page">
                <section className="contact-hero">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <p>Get in touch with our team of experts</p>
                    </div>
                </section>
                <section className="contact-success section">
                    <div className="container">
                        <div className="contact-success__content glass">
                            <CheckCircle size={64} className="contact-success__icon" />
                            <h2>Thank You!</h2>
                            <p>
                                Your inquiry has been submitted successfully. Our team will review
                                your requirements and get back to you within 24-48 business hours.
                            </p>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setFormData({
                                        name: '',
                                        email: '',
                                        company: '',
                                        phone: '',
                                        industry: '',
                                        message: '',
                                    });
                                }}
                            >
                                Submit Another Inquiry
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>
                        Ready to transform your space? Get in touch with our team to discuss
                        your interactive display needs.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p>
                                Whether you're looking for a single display or a complete solution,
                                our team is here to help. Fill out the form and we'll get back to
                                you within 24-48 hours.
                            </p>

                            <div className="contact-details">
                                <div className="contact-detail">
                                    <div className="contact-detail__icon">
                                        <Mail size={24} />
                                    </div>
                                    <div className="contact-detail__content">
                                        <h4>Email</h4>
                                        <a href="mailto:info@szcurve.com">info@szcurve.com</a>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <div className="contact-detail__icon">
                                        <Phone size={24} />
                                    </div>
                                    <div className="contact-detail__content">
                                        <h4>Phone</h4>
                                        <span>+1 (800) 123-4567</span>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <div className="contact-detail__icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="contact-detail__content">
                                        <h4>Headquarters</h4>
                                        <span>Shenzhen, Guangdong, China</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-hours glass">
                                <h4>Business Hours</h4>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                                <p>Saturday - Sunday: Closed</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper glass">
                            <h3>Request a Quote</h3>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form__row">
                                    <div className="contact-form__field">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="contact-form__field">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="contact-form__row">
                                    <div className="contact-form__field">
                                        <label htmlFor="company">Company Name *</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your company"
                                        />
                                    </div>
                                    <div className="contact-form__field">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div className="contact-form__field">
                                    <label htmlFor="industry">Industry *</label>
                                    <select
                                        id="industry"
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select your industry</option>
                                        {industries.map((industry) => (
                                            <option key={industry} value={industry}>
                                                {industry}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="contact-form__field">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell us about your project requirements, quantities, timeline, etc."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg contact-form__submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            Send Inquiry <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
