const { render, screen } = require('@testing-library/react');
const Hero = require('../../../../src/components/pricing/Hero');

test('renders Hero component', () => {
    render(<Hero />);
    const headingElement = screen.getByText(/Your Pricing Plan/i);
    expect(headingElement).toBeInTheDocument();
});