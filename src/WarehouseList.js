import { ProductItem } from './ProductItem';
import { ProductCategory } from './ProductCategory';
import './WarehouseList.css';

const filterWareHouse = (warehouse, filterText, filterOnlyInWareHouse) =>
  warehouse.map(w => {
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

export function WarehouseList(props) {
  const filteredWareHouse = filterWareHouse(props.warehouse, props.filterText, props.filterOnlyInWareHouse);
  return (
    <div className='warehouse-list'>
      <div className='header'>Name</div>
      <div className='header'>Price</div>
      {filteredWareHouse.map(w =>
        w.products.length > 0 &&
        [<ProductCategory key={w.category} category={w.category}/>,
          w.products.map(p => <ProductItem key={p.name} product={p}/>)]
      )}
    </div>
  )
}