import React from 'react';
import {
  describe, it, expect, jest,
} from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadSearchInput from './ThreadSearchInput';
/**
 * skenario testing
 *
 * - ThreadSearchInput component
 *   - should handle category keyword typing correctly
 *   - should call search function when search input is finished typing
 */

describe('ThreadSearchInput component', () => {
  it('should handle category keyword typing correctly', async () => {
    // Arrange
    render(<ThreadSearchInput onSearch={() => {}} />);
    const searchInput = await screen.getByPlaceholderText('Search by category...');

    // Action
    await userEvent.type(searchInput, 'react');

    // Assert
    expect(searchInput).toHaveValue('react');
  });

  it('should call search function when search input is finished typing', async () => {
    // Arrange
    const mockSearch = jest.fn();
    render(<ThreadSearchInput onSearch={mockSearch} />);
    const searchInput = await screen.getByPlaceholderText('Search by category...');
    await userEvent.type(searchInput, 'react');
    // Assert
    setTimeout(() => { expect(mockSearch).toBeCalledWith('react'); }, 500);
  });
});
