import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './main'; 
import '@testing-library/jest-dom'

// Mocking API response
const mockData = {
    data: [
        {
            id: '1',
            last_name: 'Doe',
            first_name: 'John',
            email: 'johndoe@example.com',
            avatar: 'https://example.com/avatar.jpg',
        },
    ],
};
describe('App Component', () => {
  it('renders table with data from API', async () => {

    global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData),
      });
    render(<App />);



    // Wait for API call and rendering
    await waitFor(() => {
      expect(screen.getByText('First Name')).toBeInTheDocument();
      expect(screen.getByText('Last Name')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('Avatar')).toBeInTheDocument();

      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('John')).toBeInTheDocument();
      expect(screen.getByText('Doe')).toBeInTheDocument();
      expect(screen.getByText('johndoe@example.com')).toBeInTheDocument();
      expect(screen.getByAltText('avatar')).toBeInTheDocument();
    });
  });
});