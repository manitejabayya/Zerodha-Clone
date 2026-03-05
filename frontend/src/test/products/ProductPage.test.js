const { render, screen } = require('@testing-library/react');
const ProductPage = require('../../products/ProductPage');

test('renders ProductPage component', () => {
    render(<ProductPage />);
    const headingElement = screen.getByText(/Product Page/i);
    expect(headingElement).toBeInTheDocument();
});