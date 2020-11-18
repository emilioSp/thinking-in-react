import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <>
      <div style={{paddingLeft: '10px'}}>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </div>
      <div>
        {product.price}
      </div>
    </>
  )
}

export { ProductItem };