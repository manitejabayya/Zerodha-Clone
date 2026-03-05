const { render, screen } = require('@testing-library/react');
const CreateTicket = require('../../components/support/CreateTicket');

test('renders CreateTicket component', () => {
    render(<CreateTicket />);
    const linkElement = screen.getByText(/create ticket/i);
    expect(linkElement).toBeInTheDocument();
});