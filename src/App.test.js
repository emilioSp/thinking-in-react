import { render, screen } from '@testing-library/react';
import App from './App';

test('HOC Warehouse', () => {
  render(<App />);
  const linkElement = screen.getByText(/HOC Warehouse/i);
  expect(linkElement).toBeInTheDocument();
});
