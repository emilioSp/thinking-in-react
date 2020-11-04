import React, { Fragment } from 'react';

export const SearchHeader = Component => props => <Fragment>
  <div>
    Header {props.headerText}
  </div>
  <Component {...props}/>
</Fragment>;