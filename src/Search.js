import './Search.css';

function Search(props) {
  return (
    <div className='search-box'>
      <div><input type="text" value={props.filterText} onChange={props.onFilterTextChange}/></div>
      <div><label><input type="checkbox" checked={props.filterOnlyInWareHouse} onChange={props.onFilterOnlyInWareHouseChange}/> Show only available products</label></div>
    </div>
  )
}

export { Search };