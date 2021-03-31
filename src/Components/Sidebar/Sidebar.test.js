import { render, screen } from '@testing-library/react';
import Option from './Option.js';

test('renders learn react link', () => {
  render(<Option />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
