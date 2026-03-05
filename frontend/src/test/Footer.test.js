const { render, screen } = require('@testing-library/react');
const Footer = require('../../components/Footer');

test('renders footer component', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/footer content/i);
    expect(linkElement).toBeInTheDocument();
});