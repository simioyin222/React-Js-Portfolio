import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders all main components in the App', () => {
  render(<App />);
  expect(screen.getByText(/Similoluwa Oyinkolade/i)).toBeInTheDocument();
  expect(screen.getByText(/Work Experience\/Background/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/Interests and Hobbies/i)).toBeInTheDocument();
});
