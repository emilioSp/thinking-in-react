import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent, screen } from '@testing-library/react';

import { SearchContainer } from './SearchContainer';
import { WarehouseContext } from '../WarehouseContext';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("changes value on user input", () => {
  const state = {
    filterText: 'test',
    filterOnlyInStock: false
  };
  const dispatch = jest.fn();
  act(() => {
    render(<WarehouseContext.Provider value={{state, dispatch}}><SearchContainer /></WarehouseContext.Provider>, container);
  });

  // get ahold of the button element, and trigger some clicks on it
  const inputBoxEl = screen.getByTestId('search');
  const checkboxEl = screen.getByTestId('checkbox-in-stock');
  expect(inputBoxEl.value).toBe("test");
  expect(inputBoxEl.checked).toBe(false);
  fireEvent.input(inputBoxEl, { target: { value: 'newTest' } });
  expect(dispatch).toHaveBeenCalledWith({ type: 'SET_FILTER_TEXT', value: 'newTest' });
  fireEvent.click(checkboxEl);
  expect(dispatch).toHaveBeenCalledWith({ type: 'SET_FILTER_ONLY_IN_STOCK', value: true });
});
