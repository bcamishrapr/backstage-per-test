import { render, screen } from '@testing-library/react';
import App from './App';

// @TODO: This Is Basic Example of TO_DO /Prasoon
// FIXME Nobody knows why this is here

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
