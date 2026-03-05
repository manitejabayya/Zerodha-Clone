const { render, screen } = require('@testing-library/react');
const Hero = require('../../components/Hero');

test('renders Hero component', () => {
    render(<Hero />);
    const linkElement = screen.getByText(/hero title/i);
    expect(linkElement).toBeInTheDocument();
});