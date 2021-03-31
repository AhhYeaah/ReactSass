import { render, screen } from '@testing-library/react';
import ExpOption from './ExpandableOption.js';

test('renders learn react link', () => {
  render(<ExpOption />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
