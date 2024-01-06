import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

test('renders About component with correct text', () => {
  render(<About />);
  expect(screen.getByText(/Similoluwa Oyinkolade/i)).toBeInTheDocument();
  expect(screen.getByText(/Chicago/i)).toBeInTheDocument();
  expect(screen.getByText(/software engineer\/video game developer/i)).toBeInTheDocument();
});