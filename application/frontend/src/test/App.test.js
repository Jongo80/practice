import { render, screen } from '@testing-library/react';
import Home from '../component/Home';

test('renders home page', () => {
  render(<Home />);
  const linkElement = screen.getByRole('link', { name: 'Clients' });
  expect(linkElement).toBeInTheDocument();
});
