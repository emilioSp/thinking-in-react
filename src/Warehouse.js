import React, { useContext } from 'react';
import { Search } from './Search';
import { WarehouseList } from './WarehouseList';
import { WarehouseContext } from './WarehouseContext';
import { Header } from './Header';

const SearchWithHeader = Header('Search Box')(Search);
const WarehouseWithHeader = Header('Warehouse')(WarehouseList);

export const Warehouse = props => {
  const {state, dispatch} = useContext(WarehouseContext);

  function handleFilterTextChange(e) {
    dispatch({
      type:'SET_FILTER_TEXT', value: e.target.value
    });
  }

  function handleFilterOnlyInWareHouseChange(e) {
    dispatch({
      type: 'SET_FILTER_ONLY_IN_STOCK',
      value: e.target.checked,
    })
  }
  return <div>
      <SearchWithHeader
        filterText={state.filterText}
        filterOnlyInWareHouse={state.filterOnlyInStock}
        onFilterTextChange={handleFilterTextChange}
        onFilterOnlyInWareHouseChange={handleFilterOnlyInWareHouseChange}/>
      <WarehouseWithHeader
        warehouse={state.warehouse}
        filterText={state.filterText}
        filterOnlyInWareHouse={state.filterOnlyInStock}/>
  </div>
}