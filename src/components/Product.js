import React from 'react';
import './Product.css';

const products = [
  {
    image: require('../images/product-1.jpg'),
    title: 'Whitening Toothpaste',
    description: 'Brighten your smile with our advanced whitening toothpaste.',
    price: '$20.00',
  },
  {
    image: require('../images/product-2.jpg'),
    title: 'Electric Toothbrush',
    description: 'Experience a deep clean with our state-of-the-art electric toothbrush.',
    price: '$25.00',
  },
  {
    image: require('../images/product-3.jpg'),
    title: 'Dental Floss',
    description: 'Keep your gums healthy with our easy-to-use dental floss.',
    price: '$30.00',
  },
];

const Product = () => {
  return (
    <section id="product" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Products</h2>
          <p className="text-muted">Discover our range of high-quality dental products.</p>
        </div>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card product-card shadow h-100 text-center">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <p className="card-text text-primary font-weight-bold">{product.price}</p>
                  <div className="mt-auto">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
