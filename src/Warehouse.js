import React, { Fragment } from 'react';
import { Search } from './Search';
import { WarehouseList } from './WarehouseList';
import { WarehouseContext } from './WarehouseContext';
import { SearchHeader } from './SearchHeader';

const SearchWithHeader = SearchHeader(Search);

export const Warehouse = props => (
  <div>
    <WarehouseContext.Consumer>
      {warehouseContext =>
        (<Fragment>
          <SearchWithHeader
            headerText='HOC COMPONENT'
            filterText={warehouseContext.filterText}
            filterOnlyInWareHouse={warehouseContext.filterOnlyInStock}
            onFilterTextChange={warehouseContext.handleFilterTextChange}
            onFilterOnlyInWareHouseChange={warehouseContext.handleFilterOnlyInStockChange}/>
          <WarehouseList
            warehouse={warehouseContext.warehouse}
            filterText={warehouseContext.filterText}
            filterOnlyInWareHouse={warehouseContext.filterOnlyInStock}/>
        </Fragment>)
      }
    </WarehouseContext.Consumer>
  </div>
)