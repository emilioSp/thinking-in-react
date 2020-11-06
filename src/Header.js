import React from 'react';
import './Header.css';

export const Header = headerText => Component => props => <>
  <header>
    HOC { headerText }
  </header>
  <Component {...props}/>
</>;