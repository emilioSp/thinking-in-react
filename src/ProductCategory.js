import './ProductCategory.css';

function ProductCategory(props) {
  return (
    <div className='category'>
      {props.category}
    </div>
  )
}

export { ProductCategory };