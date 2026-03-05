const { render, screen } = require('@testing-library/react');
const OpenAccount = require('../../OpenAccount');

test('renders Open Account component', () => {
    render(<OpenAccount />);
    const linkElement = screen.getByText(/Open Account/i);
    expect(linkElement).toBeInTheDocument();
});