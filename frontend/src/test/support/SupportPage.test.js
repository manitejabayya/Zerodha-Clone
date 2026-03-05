const { render, screen } = require('@testing-library/react');
const SupportPage = require('../SupportPage');

test('renders SupportPage component', () => {
    render(<SupportPage />);
    const linkElement = screen.getByText(/support/i);
    expect(linkElement).toBeInTheDocument();
});