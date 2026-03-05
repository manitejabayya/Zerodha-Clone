const { render, screen } = require('@testing-library/react');
const Team = require('../../about/Team');

test('renders Team component', () => {
    render(<Team />);
    const linkElement = screen.getByText(/team/i);
    expect(linkElement).toBeInTheDocument();
});