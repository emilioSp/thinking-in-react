import './Search.css';
import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

export const Search = props => {
  const searchInput = useRef(null);
  useEffect(() => {
    searchInput.current.focus();
  }, [])

  return (
      <div className='search-box'>
        <div><input data-testid="search" type="text" value={props.filterText} onChange={props.onFilterTextChange} ref={searchInput} placeholder={props.placeHolder} /></div>
        <div><label><input data-testid="checkbox-in-stock" type="checkbox" checked={props.filterOnlyInWareHouse} onChange={props.onFilterOnlyInWareHouseChange}/> Show only available products</label></div>
      </div>
    )
}

Search.propTypes = {
  placeHolder: PropTypes.string,
  filterText: PropTypes.string.isRequired,
  filterOnlyInWareHouse: PropTypes.bool.isRequired,
  onFilterTextChange: PropTypes.func,
  onFilterOnlyInWareHouseChange: PropTypes.func,
}

Search.defaultProps = {
  placeHolder: 'Search in warehouse'
}