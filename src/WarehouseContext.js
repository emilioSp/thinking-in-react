import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

const productsFromServer = [
  {category: "Sporting Goods", price: 9.99, stocked: true, name: "Baseball", id: 1},
  {category: "Electronics", price: 99.99, stocked: true, name: "iPod Touch", id: 2},
  {category: "Sporting Goods", price: 29.99, stocked: false, name: "Basketball", id: 3},
  {category: "Electronics", price: 399.99, stocked: false, name: "iPhone 5", id: 4},
  {category: "Sporting Goods", price: 49.99, stocked: true, name: "Football", id: 5},
  {category: "Electronics", price: 199.99, stocked: true, name: "Nexus 7", id: 6}
];

const initialState = {
  warehouse: [],
  filterText: '',
  filterOnlyInStock: false
}


export const WarehouseContext = React.createContext(initialState);

export const WarehouseProvider = props => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_FILTER_TEXT':
        return {...state, filterText: action.value };
        break;
      case 'SET_FILTER_ONLY_IN_STOCK':
        return {...state, filterOnlyInStock: action.value}
        break;
      case 'SET_WAREHOUSE':
        return {...state, warehouse: action.value}
      default:
        throw new Error('Unknown action')
    }
  }, initialState);

  useEffect(() => {
    const warehouse = Object.values(productsFromServer.reduce((categories, product) => {
      if (!categories[product.category]) {
        categories[product.category] = {
          category: product.category,
          products: []
        }
      }

      categories[product.category].products.push({
        name: product.name,
        inStock: product.stocked,
        price: product.price,
        id: product.id
      });

      return categories;
    }, {}));
    dispatch({type: 'SET_WAREHOUSE', value: warehouse});
  }, [])

  return <WarehouseContext.Provider value={{state, dispatch}}>{props.children}</WarehouseContext.Provider>
}