import React, { Fragment } from 'react';
import './Header.css';

export const Header = headerText => Component => props => <Fragment>
  <header>
    HOC { headerText }
  </header>
  <Component {...props}/>
</Fragment>;