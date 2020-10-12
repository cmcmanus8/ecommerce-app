import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomePage (props) {

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listProducts());
    
    return () => {
      //
    };
  }, [dispatch])

  return (
    <div className="products-wrapper">
      <h1>Products</h1>
      { loading 
      ? <h2>Loading...</h2>
      : error
        ? <p>Error loading products: {error}</p>
        : <div className="products-container">
            {
              products.map(product =>
                <div className="product" key={product._id}>
                  <Link to={'/product/' + product._id}>          
                    <img className="product-image" src={product.image} alt="product"/>
                  </Link>
                  <div className="product-name">
                    <Link to={'/product/' + product._id}>{product.name}</Link>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">£{product.price}</div>
                  <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
                </div>
              )
              }
            </div>
        } 
    </div>
    
  )
}

export default HomePage;