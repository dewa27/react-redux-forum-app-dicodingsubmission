import React from 'react';
import {
  describe, it, expect, jest,
} from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';
/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle email typing correctly
 *   - should handle name typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

describe('RegisterInput component', () => {
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput onRegister={() => {}} currentPage="" />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'test@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('test@gmail.com');
  });

  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput onRegister={() => {}} currentPage="" />);
    const nameInput = await screen.getByPlaceholderText('Name');

    // Action
    await userEvent.type(nameInput, 'Mas John');

    // Assert
    expect(nameInput).toHaveValue('Mas John');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput onRegister={() => {}} currentPage="" />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'test123');

    // Assert
    expect(passwordInput).toHaveValue('test123');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = jest.fn();
    render(<RegisterInput onRegister={mockRegister} currentPage="" />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'test@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'Mas John');

    const registerButton = await screen.getByRole('button', { name: 'Sign Up' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      email: 'test@gmail.com',
      name: 'Mas John',
      password: 'passwordtest',
    });
  });
});
