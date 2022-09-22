import { render, screen } from '@testing-library/react';
import App from './App';

// @TEST: This Is Basic Example of TO_DO /Prasoon

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
