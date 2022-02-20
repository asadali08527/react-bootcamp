import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Asad/i);
  expect(linkElement).toBeInTheDocument();
});
