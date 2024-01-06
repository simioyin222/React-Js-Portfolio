import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './Projects';

test('renders Projects component with project links', () => {
  render(<Projects />);
  const projectOneLink = screen.getByText(/PracticeW1/i).closest('a');
  expect(projectOneLink).toHaveAttribute('href', 'https://github.com/simioyin222/PracticeW1');

  const projectTwoLink = screen.getByText(/Simi-Portfolio1/i).closest('a');
  expect(projectTwoLink).toHaveAttribute('href', 'https://github.com/simioyin222/SIMI-PORTFOLIO1');
});