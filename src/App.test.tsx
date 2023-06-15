import { render, screen } from '@testing-library/react';
import App from './App';

test('should render search field', () => {
	render(<App />);
	const searchInput = screen.getByLabelText('search');
	expect(searchInput).toBeInTheDocument();
});
