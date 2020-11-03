import './App.css';
import { Warehouse } from './Warehouse';
import { WareHouseProvider } from './WarehouseContext';
import { Dummy } from './Dummy';
import { ResponsiveImg } from './ResponsiveImg';
import { Fragment } from 'react';

const productsFromServer = [
  {category: "Sporting Goods", price: 9.99, stocked: true, name: "Baseball"},
  {category: "Electronics", price: 99.99, stocked: true, name: "iPod Touch"},
  {category: "Sporting Goods", price: 29.99, stocked: false, name: "Basketball"},
  {category: "Electronics", price: 399.99, stocked: false, name: "iPhone 5"},
  {category: "Sporting Goods", price: 49.99, stocked: true, name: "Football"},
  {category: "Electronics", price: 199.99, stocked: true, name: "Nexus 7"}
];

const warehouse = Object.values(productsFromServer.reduce((categories, product) => {
  if (!categories[product.category]) {
    categories[product.category] = {
      category: product.category,
      products: []
    }
  }

  categories[product.category].products.push({
    name: product.name,
    inStock: product.stocked,
    price: product.price
  });

  return categories;
}, {}));


function App() {
  return (
    <Fragment>
    <div className="App">
      <WareHouseProvider warehouse={warehouse}>
        <Warehouse/>
      </WareHouseProvider>
      <Dummy/>
      <ResponsiveImg/>
    </div>
    </Fragment>
  );
}

export default App;
