const { render, screen } = require('@testing-library/react');
const Brokerage = require('../../../../src/components/pricing/Brokerage');

test('renders Brokerage component', () => {
    render(<Brokerage />);
    const linkElement = screen.getByText(/Brokerage/i);
    expect(linkElement).toBeInTheDocument();
});