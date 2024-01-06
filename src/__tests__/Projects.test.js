import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../components/Projects';

test('renders Projects component with project links', () => {
  render(<Projects />);
  
 
  const links = screen.getAllByRole('link');
  expect(links.length).toBeGreaterThanOrEqual(2);

  
  expect(links[0]).toHaveAttribute('href', 'https://github.com/simioyin222/DailyLife');
  expect(links[1]).toHaveAttribute('href', 'https://github.com/simioyin222/SIMI-PORTFOLIO1');
});