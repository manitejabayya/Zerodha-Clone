const { render, screen } = require('@testing-library/react');
const Hero = require('../../../../src/components/products/Hero');

test('renders Hero component', () => {
    render(<Hero />);
    const headingElement = screen.getByText(/hero title/i);
    expect(headingElement).toBeInTheDocument();
});