import React, { Fragment } from 'react';
import { Search } from './Search';
import { WarehouseList } from './WarehouseList';
import { WarehouseContext } from './WarehouseContext';
import { Header } from './Header';

const SearchWithHeader = Header('Search Box')(Search);
const WarehouseWithHeader = Header('Warehouse')(WarehouseList);

export const Warehouse = props => (
  <div>
    <WarehouseContext.Consumer>
      {warehouseContext =>
        (<Fragment>
          <SearchWithHeader
            filterText={warehouseContext.filterText}
            filterOnlyInWareHouse={warehouseContext.filterOnlyInStock}
            onFilterTextChange={warehouseContext.handleFilterTextChange}
            onFilterOnlyInWareHouseChange={warehouseContext.handleFilterOnlyInStockChange}/>
          <WarehouseWithHeader
            warehouse={warehouseContext.warehouse}
            filterText={warehouseContext.filterText}
            filterOnlyInWareHouse={warehouseContext.filterOnlyInStock}/>
        </Fragment>)
      }
    </WarehouseContext.Consumer>
  </div>
)