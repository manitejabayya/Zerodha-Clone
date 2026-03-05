const { render, screen } = require('@testing-library/react');
const LeftSection = require('../../../../components/products/LeftSection');

test('renders LeftSection component', () => {
    render(<LeftSection />);
    const linkElement = screen.getByText(/some text in LeftSection/i);
    expect(linkElement).toBeInTheDocument();
});