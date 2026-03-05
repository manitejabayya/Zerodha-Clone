const { render, screen } = require('@testing-library/react');
const Pricing = require('../../components/Pricing');

test('renders Pricing component', () => {
    render(<Pricing />);
    const linkElement = screen.getByText(/Pricing/i);
    expect(linkElement).toBeInTheDocument();
});