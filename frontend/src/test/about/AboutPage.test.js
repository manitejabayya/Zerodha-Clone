const { render, screen } = require('@testing-library/react');
const AboutPage = require('../../about/AboutPage');

test('renders AboutPage component', () => {
    render(<AboutPage />);
    const linkElement = screen.getByText(/About Us/i);
    expect(linkElement).toBeInTheDocument();
});