import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Cpu, Maximize2 } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card card">
            <div className="product-card__image">
                <img src={product.image} alt={product.name} />
                <div className="product-card__overlay">
                    <Link to={`/products/${product.id}`} className="product-card__view">
                        View Details <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
            <div className="product-card__content">
                <span className="product-card__series">{product.series}</span>
                <h3 className="product-card__name">{product.name}</h3>

                <div className="product-card__specs">
                    <div className="product-card__spec">
                        <Maximize2 size={14} />
                        <span>{product.size}</span>
                    </div>
                    <div className="product-card__spec">
                        <Monitor size={14} />
                        <span>{product.resolution}</span>
                    </div>
                    <div className="product-card__spec">
                        <Cpu size={14} />
                        <span>{product.system || 'N/A'}</span>
                    </div>
                </div>

                <div className="product-card__features">
                    {product.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="product-card__feature">{feature}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
