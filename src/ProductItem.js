import React from 'react';

function ProductItem(props) {
  return (
    <>
      <div style={{paddingLeft: '10px'}}>
        {props.name}
      </div>
      <div>
        {props.price}
      </div>
    </>
  )
}

export { ProductItem };