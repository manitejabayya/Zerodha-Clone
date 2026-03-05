const { render, screen } = require('@testing-library/react');
const Universe = require('../../products/Universe');

test('renders Universe component', () => {
    render(<Universe />);
    const linkElement = screen.getByText(/universe/i);
    expect(linkElement).toBeInTheDocument();
});