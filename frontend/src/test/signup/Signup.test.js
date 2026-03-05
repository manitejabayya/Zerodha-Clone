const { render, screen } = require('@testing-library/react');
const Signup = require('../../components/Signup');

test('renders Signup component', () => {
    render(<Signup />);
    const linkElement = screen.getByText(/sign up/i);
    expect(linkElement).toBeInTheDocument();
});