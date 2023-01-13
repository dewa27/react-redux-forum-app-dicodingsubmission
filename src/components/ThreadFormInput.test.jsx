import React from 'react';
import {
  describe, it, expect, jest,
} from '@jest/globals';
import '@testing-library/jest-dom';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadFormInput from './ThreadFormInput';
import threadCategories from '../utils/threadCategoriesData';
/**
 * skenario testing
 *
 * - ThreadFormInput component
 *   - should handle title typing correctly
 *   - should handle thread category selecting correctly
 *   - should handle
 */

describe('ThreadFormInput component', () => {
  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadFormInput addThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Insert title...');

    // Action
    await userEvent.type(titleInput, 'Contoh judul thread');

    // Assert
    expect(titleInput).toHaveValue('Contoh judul thread');
  });

  it('should handle thread category selecting correctly', async () => {
    // Arrange
    render(<ThreadFormInput addThread={() => {}} />);
    const threadCategorySelect = await screen.getByTestId('select');
    // Action
    await fireEvent.change(threadCategorySelect, { target: { value: threadCategories[0].name } });

    // Assert
    expect(screen.getByText(threadCategories[0].name)).toBeInTheDocument();
  });

  it('should call addThread function when send button is clicked', async () => {
    // Arrange
    const mockAddThread = jest.fn();
    render(<ThreadFormInput addThread={mockAddThread} />);
    const titleInput = await screen.getByPlaceholderText('Insert title...');
    await userEvent.type(titleInput, 'Contoh judul thread');
    const threadCategorySelect = await screen.getByTestId('select');
    await fireEvent.change(threadCategorySelect, { target: { value: threadCategories[0].name } });
    const bodyInput = await screen.getByPlaceholderText('Insert thread body...');
    await userEvent.type(bodyInput, 'Lorem ipsum sir dolor amet');

    const sendButton = await screen.getByRole('button', { name: 'Send' });

    // Action
    await userEvent.click(sendButton);

    // Assert
    expect(mockAddThread).toBeCalledWith({
      title: 'Contoh judul thread',
      body: 'Lorem ipsum sir dolor amet',
      category: threadCategories[0].name,
    });
  });
});
