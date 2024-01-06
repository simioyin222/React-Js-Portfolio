import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Work from '../components/Work';

test('renders Work component with LinkedIn link', () => {
  render(<Work />);
  const linkElement = screen.getByText(/LinkedIn for my details/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/simioyin/');
});
