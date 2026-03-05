const { render, screen } = require('@testing-library/react');
const HomePage = require('../../home/HomePage');

test('renders HomePage component', () => {
    render(<HomePage />);
    const headingElement = screen.getByText(/welcome to the homepage/i);
    expect(headingElement).toBeInTheDocument();
});