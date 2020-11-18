export const ProductDetails = ({ product }) =>
  <>
    <h1>{product.name}</h1>
    <h2>{product.price}</h2>
    <h3>{product.inStock ? 'In stock' : 'Out of stock'}</h3>
  </>;