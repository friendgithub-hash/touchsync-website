import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Maximize2, Cpu, Zap, Eye, Palette, Grid3X3, Radio, CheckCircle2, Layers, Sun, Contrast, Timer, Gauge } from 'lucide-react';
import { products } from '../data/products';
import './ProductDetail.css';

// Generate detailed specs based on product properties
const generateDetailedSpecs = (product) => {
    const sizeNum = parseInt(product.size);

    // Calculate pixel pitch based on size and resolution
    const getPixelPitch = () => {
        if (product.resolution === '4K') {
            if (sizeNum <= 55) return '0.315 x 0.315';
            if (sizeNum <= 65) return '0.372 x 0.372';
            if (sizeNum <= 75) return '0.429 x 0.429';
            if (sizeNum <= 86) return '0.493 x 0.493';
            if (sizeNum <= 98) return '0.561 x 0.561';
            return '0.630 x 0.630';
        }
        if (product.resolution === 'FHD') {
            if (sizeNum <= 55) return '0.630 x 0.630';
            return '0.744 x 0.744';
        }
        return '0.315 x 0.315';
    };

    const getResolutionValue = () => {
        switch (product.resolution) {
            case '4K': return '3,840 x 2,160';
            case 'FHD': return '1,920 x 1,080';
            case '2K': return '2,560 x 1,440';
            case '8K': return '7,680 x 4,320';
            case 'Special': return product.aspectRatio === '21:9' ? '2,560 x 1,080' : '1,920 x 1,080';
            default: return '3,840 x 2,160';
        }
    };

    const getBrightness = () => {
        if (product.brightness) {
            const match = product.brightness.match(/(\d+)/);
            return match ? `${match[1]} nits` : '400 nits';
        }
        return '400 nits';
    };

    return {
        display: {
            title: 'Display Specifications',
            icon: Monitor,
            specs: [
                { label: 'Diagonal Size', value: product.size },
                { label: 'Panel Type', value: product.touchType === 'Capacitive' ? 'IPS (Full Lamination)' : 'IPS' },
                { label: 'Resolution', value: getResolutionValue() },
                { label: 'Pixel Pitch (HxV)', value: `${getPixelPitch()} mm` },
                { label: 'Brightness (Typ)', value: getBrightness() },
                { label: 'Contrast Ratio', value: product.contrastRatio || '1,200:1' },
            ]
        },
        performance: {
            title: 'Performance',
            icon: Zap,
            specs: [
                { label: 'Viewing Angle (H/V)', value: '178°/178°' },
                { label: 'Response Time', value: product.series.includes('OLED') ? '1ms' : '8ms' },
                { label: 'Colour Gamut', value: product.series.includes('OLED') ? '99% DCI-P3' : '72% NTSC' },
                { label: 'Refresh Rate', value: product.features?.includes('120Hz refresh rate') ? '120 Hz' : '60 Hz' },
                { label: 'H-Scanning Frequency', value: '135 kHz' },
                { label: 'V-Scanning Frequency', value: '60 Hz' },
            ]
        },
        touch: {
            title: 'Touch Technology',
            icon: Layers,
            specs: [
                { label: 'Touch Type', value: product.touchType || 'N/A' },
                { label: 'Touch Points', value: product.touchPoints || 'N/A' },
                { label: 'Glass Type', value: product.features?.includes('Anti-glare glass') ? 'Anti-glare Tempered Glass' : '4mm Tempered Glass' },
                { label: 'Glass Haze', value: product.features?.includes('Anti-glare glass') ? '25%' : '3%' },
                { label: 'Touch Accuracy', value: '±1mm' },
                { label: 'Writing Delay', value: '<35ms' },
            ]
        },
        system: {
            title: 'System & Connectivity',
            icon: Cpu,
            specs: [
                { label: 'Operating System', value: product.system || 'N/A' },
                { label: 'Processor', value: product.system?.includes('Android') ? 'Quad-Core A55' : 'N/A' },
                { label: 'RAM', value: product.system?.includes('Android') ? '4GB DDR4' : 'N/A' },
                { label: 'Storage', value: product.system?.includes('Android') ? '32GB eMMC' : 'N/A' },
                { label: 'Wi-Fi', value: product.features?.includes('Wi-Fi 6') ? 'Wi-Fi 6 (802.11ax)' : 'Wi-Fi 5 (802.11ac)' },
                { label: 'Bluetooth', value: 'Bluetooth 5.0' },
            ]
        }
    };
};

const getApplicationScenarios = (product) => {
    const scenarios = {
        'Meeting Room': [
            'Video conferencing with remote teams',
            'Computer screen mirroring and presentations',
            'Interactive whiteboard brainstorming sessions',
            'Multi-participant collaborative annotation',
            'Wireless content sharing from any device',
        ],
        'Education': [
            'Interactive classroom teaching',
            'Student-teacher collaboration',
            'Digital textbook display',
            'Multi-student touch interaction',
            'Eye-protection for extended use',
        ],
        'Preschool': [
            'Child-friendly interactive learning',
            'Group activity games',
            'Creative drawing and painting',
            'Educational app experiences',
            'Safe and durable for young learners',
        ],
        'Digital Signage': [
            'Retail advertising and promotions',
            'Wayfinding and directory displays',
            'Queue management systems',
            'Corporate communication boards',
            'Menu boards for hospitality',
        ],
        'Transparent Display': [
            'Luxury retail product showcases',
            'Museum and gallery exhibits',
            'Automotive showroom displays',
            'High-end real estate presentations',
            'Interactive window displays',
        ],
        'Video Wall': [
            'Control room monitoring',
            'Large venue presentations',
            'Event and concert backdrops',
            'Corporate lobby displays',
            'Multi-source content display',
        ],
        'Monitor': [
            'Video conferencing rooms',
            'Computer screen mirroring',
            'Presentation displays',
            'Digital signage applications',
            'Multi-input source switching',
        ],
        'Professional Meeting': [
            'High-security enterprise meetings',
            'Dual-system presentations',
            'Cross-platform collaboration',
            'Government and military briefings',
            'Financial trading rooms',
        ],
        'Mobile Display': [
            'Pop-up retail displays',
            'Trade show presentations',
            'Mobile training sessions',
            'Outdoor events and exhibitions',
            'Portable meeting setups',
        ],
    };

    return scenarios[product.application] || scenarios['Meeting Room'];
};

const ProductDetail = () => {
    const { productId } = useParams();
    const product = products.find(p => p.id === productId);

    if (!product) {
        return (
            <main className="product-detail-page">
                <div className="container">
                    <div className="product-not-found">
                        <h1>Product Not Found</h1>
                        <p>The product you're looking for doesn't exist.</p>
                        <Link to="/products" className="btn btn-primary">
                            <ArrowLeft size={18} />
                            Back to Products
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    const detailedSpecs = generateDetailedSpecs(product);
    const applicationScenarios = getApplicationScenarios(product);

    return (
        <main className="product-detail-page">
            {/* Breadcrumb */}
            <section className="product-detail-breadcrumb">
                <div className="container">
                    <Link to="/products" className="breadcrumb-back">
                        <ArrowLeft size={18} />
                        Back to Products
                    </Link>
                </div>
            </section>

            {/* Hero Section */}
            <section className="product-detail-hero">
                <div className="container">
                    <div className="product-detail-hero__grid">
                        <div className="product-detail-hero__image">
                            <div className="product-detail-hero__image-wrapper">
                                <img src={product.image} alt={product.name} />
                                <div className="product-detail-hero__badge">{product.series}</div>
                            </div>
                        </div>
                        <div className="product-detail-hero__info">
                            <span className="product-detail-hero__series">{product.series}</span>
                            <h1 className="product-detail-hero__name">{product.name}</h1>
                            <p className="product-detail-hero__application">
                                Designed for <strong>{product.application}</strong> applications
                            </p>

                            <div className="product-detail-hero__highlights">
                                <div className="highlight-item">
                                    <Maximize2 size={20} />
                                    <div>
                                        <span className="highlight-label">Screen Size</span>
                                        <span className="highlight-value">{product.size}</span>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <Monitor size={20} />
                                    <div>
                                        <span className="highlight-label">Resolution</span>
                                        <span className="highlight-value">{product.resolution}</span>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <Cpu size={20} />
                                    <div>
                                        <span className="highlight-label">System</span>
                                        <span className="highlight-value">{product.system || 'N/A'}</span>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <Layers size={20} />
                                    <div>
                                        <span className="highlight-label">Touch</span>
                                        <span className="highlight-value">{product.touchPoints || 'N/A'}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="product-detail-hero__features">
                                <h3>Key Features</h3>
                                <div className="features-list">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="feature-item">
                                            <CheckCircle2 size={16} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="product-detail-hero__cta">
                                <Link to="/contact" className="btn btn-primary btn-lg">
                                    Request Quote
                                </Link>
                                <Link to="/contact" className="btn btn-secondary btn-lg">
                                    Contact Sales
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specifications Section */}
            <section className="product-detail-specs">
                <div className="container">
                    <h2 className="section-title">Technical Specifications</h2>
                    <div className="specs-grid">
                        {Object.values(detailedSpecs).map((section, index) => (
                            <div key={index} className="specs-card">
                                <div className="specs-card__header">
                                    <section.icon size={24} />
                                    <h3>{section.title}</h3>
                                </div>
                                <div className="specs-card__content">
                                    {section.specs.map((spec, specIndex) => (
                                        <div key={specIndex} className="spec-row">
                                            <span className="spec-label">{spec.label}</span>
                                            <span className="spec-value">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Scenarios */}
            <section className="product-detail-scenarios">
                <div className="container">
                    <h2 className="section-title">Application Scenarios</h2>
                    <div className="scenarios-content">
                        <div className="scenarios-image">
                            <img src={product.image} alt={`${product.name} in use`} />
                        </div>
                        <div className="scenarios-list">
                            <p className="scenarios-intro">
                                The <strong>{product.name}</strong> is perfect for a variety of professional environments.
                                Its {product.size} display with {product.resolution} resolution delivers stunning visuals
                                for any application.
                            </p>
                            <ul className="scenarios-items">
                                {applicationScenarios.map((scenario, index) => (
                                    <li key={index}>
                                        <CheckCircle2 size={18} />
                                        <span>{scenario}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products CTA */}
            <section className="product-detail-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Need Help Choosing?</h2>
                        <p>Our team of experts can help you find the perfect display solution for your needs.</p>
                        <div className="cta-buttons">
                            <Link to="/products" className="btn btn-secondary btn-lg">
                                Browse All Products
                            </Link>
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Contact an Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductDetail;
