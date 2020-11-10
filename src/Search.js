import './Search.css';
import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.Component {
  static propTypes = {
    placeHolder: PropTypes.string,
    filterText: PropTypes.string.isRequired,
    filterOnlyInWareHouse: PropTypes.bool.isRequired,
    onFilterTextChange: PropTypes.func,
    onFilterOnlyInWareHouseChange: PropTypes.func,
  }
  static defaultProps = {
    placeHolder: 'Search in warehouse'
  }
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
        <div><input type="text" value={this.props.filterText} onChange={this.props.onFilterTextChange} ref={this.searchInput} placeholder={this.props.placeHolder} /></div>
        <div><label><input type="checkbox" checked={this.props.filterOnlyInWareHouse} onChange={this.props.onFilterOnlyInWareHouseChange}/> Show only available products</label></div>
      </div>
    )
  }
}