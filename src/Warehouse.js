import React, { useContext } from 'react';
import { Search } from './Search/Search';
import { WarehouseList } from './WarehouseList';
import { WarehouseContext } from './WarehouseContext';
import { Header } from './Header';
import { Switch, Route, useParams, useHistory } from 'react-router-dom';
import { ProductDetails } from './ProductDetails';
import { SearchContainer } from './Search/SearchContainer';

const WarehouseWithHeader = Header('Warehouse')(WarehouseList);

const ProductDetailsWithRouter = () => {
  const { state: { warehouse } } = useContext(WarehouseContext);
  const { id } = useParams();
  const history = useHistory();

  if (warehouse.length === 0) return null; // prevent errors when warehouse is not yet in the context

  const product = warehouse.map(w => w.products).flat().find(p => p.id === parseInt(id));
  return <>
    <ProductDetails product={product}></ProductDetails>
    <button onClick={() => history.goBack()}>Go back</button>
  </>
}

export const Warehouse = () => {
  const { state } = useContext(WarehouseContext);

  return <div>
      <Switch>
        <Route exact path={'/'}>
          <SearchContainer />
          <WarehouseWithHeader
            warehouse={state.warehouse}
            filterText={state.filterText}
            filterOnlyInWareHouse={state.filterOnlyInStock}/>
        </Route>
        <Route exact path={'/product/:id'}>
          <ProductDetailsWithRouter/>
        </Route>
      </Switch>
  </div>
}