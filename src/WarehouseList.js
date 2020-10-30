import { ProductItem } from './ProductItem';
import { ProductCategory } from './ProductCategory';
import './WarehouseList.css';

const filterWareHouse = (warehouse, filterText, filterOnlyInWareHouse) => {
  return warehouse.map(w => {
    let products = w.products;
    if (filterOnlyInWareHouse) {
      products = products.filter(p => p.inStock);
    }
    products = products.filter(p => p.name.toLowerCase().includes(filterText?.toLowerCase()));
    return {
      category: w.category,
      products
    };
  });
}

function WarehouseList(props) {
  console.log('WarehouseList');
  const filteredWareHouse = filterWareHouse(props.warehouse, props.filterText, props.filterOnlyInWareHouse);
  return (
    <div className='warehouse-list'>
      <div className='header'>Name</div>
      <div className='header'>Price</div>
      {filteredWareHouse.map(w =>
        w.products.length > 0 &&
        [<ProductCategory key={w.category} category={w.category}/>,
          w.products.map(p => <ProductItem key={p.name} name={p.name} price={p.price}/>)]
      )}
    </div>
  )
}

export { WarehouseList };