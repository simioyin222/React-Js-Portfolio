import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Interests from '../components/Interests';

test('renders Interests component with hobbies list', () => {
  render(<Interests />);
  expect(screen.getByText(/MMA\/UFC/i)).toBeInTheDocument();
  expect(screen.getByText(/Video Games/i)).toBeInTheDocument();
  expect(screen.getByText(/Anime/i)).toBeInTheDocument();
  const twitchLink = screen.getByText(/I stream too! Check me out!/i).closest('a');
  expect(twitchLink).toHaveAttribute('href', 'https://www.twitch.tv/tobbdawgg');
});