const { render, screen } = require('@testing-library/react');
const NotFound = require('../../NotFound');

test('renders Not Found page', () => {
    render(<NotFound />);
    const linkElement = screen.getByText(/not found/i);
    expect(linkElement).toBeInTheDocument();
});