import { WarehouseContext } from '../WarehouseContext';
import { useContext } from 'react';
import { Header } from '../Header';
import { Search } from './Search';

const SearchWithHeader = Header('Search Box')(Search);

export const SearchContainer = () => {
  const { state, dispatch } = useContext(WarehouseContext);

  const handleFilterTextChange = e => {
    dispatch({
      type:'SET_FILTER_TEXT', value: e.target.value
    });
  }

  const handleFilterOnlyInWareHouseChange = e => {
    dispatch({
      type: 'SET_FILTER_ONLY_IN_STOCK',
      value: e.target.checked,
    })
  }

  return (
    <SearchWithHeader
      filterText={state.filterText}
      filterOnlyInWareHouse={state.filterOnlyInStock}
      onFilterTextChange={handleFilterTextChange}
      onFilterOnlyInWareHouseChange={handleFilterOnlyInWareHouseChange}/>
  )
}