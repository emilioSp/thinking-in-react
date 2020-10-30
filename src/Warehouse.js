import React, { Fragment } from 'react';
import { Search } from './Search';
import { WarehouseList } from './WarehouseList';
import { WarehouseContext } from './WarehouseContext';

export const Warehouse = props => (
  <div>
    <WarehouseContext.Consumer>
      {warehouseContext =>
        (<Fragment>
          <Search
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