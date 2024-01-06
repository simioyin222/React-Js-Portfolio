import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../components/Projects';

test('renders Projects component with project links', () => {
  render(<Projects />);
  
  // Get all links in the component
  const links = screen.getAllByRole('link');
  expect(links.length).toBeGreaterThanOrEqual(2); // Ensure there are at least two links

  // Test the href attribute of each link
  expect(links[0]).toHaveAttribute('href', 'https://github.com/simioyin222/DailyLife');
  expect(links[1]).toHaveAttribute('href', 'https://github.com/simioyin222/SIMI-PORTFOLIO1');
});