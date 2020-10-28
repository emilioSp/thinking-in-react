import React from 'react';

function ProductItem(props) {
  return (
    <React.Fragment>
      <div style={{paddingLeft: '10px'}}>
        {props.name}
      </div>
      <div>
        {props.price}
      </div>
    </React.Fragment>
  )
}

export { ProductItem };