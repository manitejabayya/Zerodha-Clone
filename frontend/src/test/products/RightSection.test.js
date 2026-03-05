const { render, screen } = require('@testing-library/react');
const RightSection = require('../../../../src/components/products/RightSection');

test('renders RightSection component', () => {
    render(<RightSection />);
    const element = screen.getByText(/some text in RightSection/i);
    expect(element).toBeInTheDocument();
});