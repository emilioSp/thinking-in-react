import React, { useRef } from 'react';

export const UnControlledSearch = props => {
  const input = useRef(null);

  function handleOnChangeInput() {
    console.log(input.current.value);
  }

  return <div>
    <label>UnController input <input type="text" ref={input} onChange={handleOnChangeInput}/></label>
  </div>
}