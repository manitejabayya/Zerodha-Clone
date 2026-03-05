const { render, screen } = require('@testing-library/react');
const Awards = require('../../home/Awards');

test('renders Awards component', () => {
    render(<Awards />);
    const linkElement = screen.getByText(/awards/i);
    expect(linkElement).toBeInTheDocument();
});