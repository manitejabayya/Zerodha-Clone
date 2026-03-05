const { render, screen } = require('@testing-library/react');
const PricingPage = require('../../PricingPage');

test('renders Pricing Page', () => {
    render(<PricingPage />);
    const linkElement = screen.getByText(/Pricing/i);
    expect(linkElement).toBeInTheDocument();
});