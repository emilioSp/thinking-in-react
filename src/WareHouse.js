import React from 'react';
import { Search } from './Search';
import { WareHouseList } from './WareHouseList';

class WareHouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterOnlyInWareHouse: true
    };
    this.handleFilterText = this.handleFilterText.bind(this);
    this.handleFilterOnlyInWareHouse = this.handleFilterOnlyInWareHouse.bind(this);
  }

  handleFilterText(e) {
    this.setState({
      filterText: e.target.value
    });
  }

  handleFilterOnlyInWareHouse(e) {
    this.setState({
      filterOnlyInWareHouse: e.target.checked
    });
  }

  render() {
    return (
      <div>
        <Search
          filterText={this.state.filterText}
          filterOnlyInWareHouse={this.state.filterOnlyInWareHouse}
          onFilterTextChange={this.handleFilterText}
          onFilterOnlyInWareHouseChange={this.handleFilterOnlyInWareHouse}/>
        <WareHouseList
          warehouse={this.props.warehouse}
          filterText={this.state.filterText}
          filterOnlyInWareHouse={this.state.filterOnlyInWareHouse}/>
      </div>
    );
  }
}

export { WareHouse };