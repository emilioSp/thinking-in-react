import './Search.css';
import React from 'react';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  componentDidMount() {
    this.searchInput.current.focus();
  }

  render() {
    return (
      <div className='search-box'>
        <div><input type="text" value={this.props.filterText} onChange={this.props.onFilterTextChange} ref={this.searchInput} /></div>
        <div><label><input type="checkbox" checked={this.props.filterOnlyInWareHouse} onChange={this.props.onFilterOnlyInWareHouseChange}/> Show only available products</label></div>
      </div>
    )
  }
}