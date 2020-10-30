import React from 'react';

export const WarehouseContext = React.createContext({
  warehouse: [],
  filterText: '',
  filterOnlyInStock: false
});

export class WareHouseProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterOnlyInStock: false
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterOnlyInStockChange = this.handleFilterOnlyInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.setState({
      filterText: e.target.value
    });
  }

  handleFilterOnlyInStockChange(e) {
    this.setState({
      filterOnlyInStock: Boolean(e.target.checked)
    })
  }

  render() {
    return (
      <WarehouseContext.Provider value={{
        warehouse: this.props.warehouse,
        filterText: this.state.filterText,
        filterOnlyInStock: this.state.filterOnlyInStock,
        handleFilterTextChange: this.handleFilterTextChange,
        handleFilterOnlyInStockChange: this.handleFilterOnlyInStockChange
      }}>
      {this.props.children}
      </WarehouseContext.Provider>
    )
  }
}

WarehouseContext.displayName = 'WarehouseContext';