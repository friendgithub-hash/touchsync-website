import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, sizes, resolutions } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedResolutions, setSelectedResolutions] = useState([]);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Parse initial filters from URL
    useEffect(() => {
        const sizesParam = searchParams.get('sizes');
        const resolutionsParam = searchParams.get('resolutions');

        if (sizesParam) {
            setSelectedSizes(sizesParam.split(','));
        }
        if (resolutionsParam) {
            setSelectedResolutions(resolutionsParam.split(','));
        }
    }, []);

    // Update URL when filters change
    useEffect(() => {
        const params = new URLSearchParams();
        if (selectedSizes.length > 0) {
            params.set('sizes', selectedSizes.join(','));
        }
        if (selectedResolutions.length > 0) {
            params.set('resolutions', selectedResolutions.join(','));
        }
        setSearchParams(params);
    }, [selectedSizes, selectedResolutions, setSearchParams]);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size);
            const matchesResolution = selectedResolutions.length === 0 || selectedResolutions.includes(product.resolution);
            return matchesSize && matchesResolution;
        });
    }, [selectedSizes, selectedResolutions]);

    const toggleSize = (size) => {
        setSelectedSizes((prev) =>
            prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
        );
    };

    const toggleResolution = (resolution) => {
        setSelectedResolutions((prev) =>
            prev.includes(resolution) ? prev.filter((r) => r !== resolution) : [...prev, resolution]
        );
    };

    const clearFilters = () => {
        setSelectedSizes([]);
        setSelectedResolutions([]);
    };

    const hasFilters = selectedSizes.length > 0 || selectedResolutions.length > 0;

    return (
        <main className="products-page">
            {/* Hero Section */}
            <section className="products-hero">
                <div className="container">
                    <h1>Our Products</h1>
                    <p>
                        Explore our comprehensive range of interactive displays designed for
                        education, enterprise collaboration, and digital signage.
                    </p>
                </div>
            </section>

            <section className="products-content">
                <div className="container">
                    {/* Mobile Filter Toggle */}
                    <button
                        className="products-filter-toggle btn btn-secondary"
                        onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                    >
                        <Filter size={18} />
                        Filters
                        {hasFilters && <span className="filter-count">{selectedSizes.length + selectedResolutions.length}</span>}
                    </button>

                    <div className="products-layout">
                        {/* Sidebar Filters */}
                        <aside className={`products-sidebar ${isMobileFilterOpen ? 'products-sidebar--open' : ''}`}>
                            <div className="products-sidebar__header">
                                <h3>Filters</h3>
                                {hasFilters && (
                                    <button className="products-clear" onClick={clearFilters}>
                                        Clear All
                                    </button>
                                )}
                                <button
                                    className="products-sidebar__close"
                                    onClick={() => setIsMobileFilterOpen(false)}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Size Filter */}
                            <div className="products-filter">
                                <div className="products-filter__header">
                                    <h4>Size</h4>
                                    <ChevronDown size={18} />
                                </div>
                                <div className="products-filter__options">
                                    {sizes.map((size) => (
                                        <label key={size} className="products-filter__option">
                                            <input
                                                type="checkbox"
                                                checked={selectedSizes.includes(size)}
                                                onChange={() => toggleSize(size)}
                                            />
                                            <span className="products-filter__checkbox"></span>
                                            <span>{size}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Resolution Filter */}
                            <div className="products-filter">
                                <div className="products-filter__header">
                                    <h4>Resolution</h4>
                                    <ChevronDown size={18} />
                                </div>
                                <div className="products-filter__options">
                                    {resolutions.map((res) => (
                                        <label key={res.value} className="products-filter__option">
                                            <input
                                                type="checkbox"
                                                checked={selectedResolutions.includes(res.value)}
                                                onChange={() => toggleResolution(res.value)}
                                            />
                                            <span className="products-filter__checkbox"></span>
                                            <span>{res.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* Products Grid */}
                        <div className="products-main">
                            {/* Active Filters */}
                            {hasFilters && (
                                <div className="products-active-filters">
                                    {selectedSizes.map((size) => (
                                        <button
                                            key={size}
                                            className="products-active-filter"
                                            onClick={() => toggleSize(size)}
                                        >
                                            {size} <X size={14} />
                                        </button>
                                    ))}
                                    {selectedResolutions.map((res) => (
                                        <button
                                            key={res}
                                            className="products-active-filter"
                                            onClick={() => toggleResolution(res)}
                                        >
                                            {resolutions.find((r) => r.value === res)?.label} <X size={14} />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Results Count */}
                            <div className="products-results">
                                <span>Showing {filteredProducts.length} products</span>
                            </div>

                            {/* Products Grid */}
                            {filteredProducts.length > 0 ? (
                                <div className="products-grid">
                                    {filteredProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="products-empty">
                                    <p>No products match your selected filters.</p>
                                    <button className="btn btn-primary" onClick={clearFilters}>
                                        Clear Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;
