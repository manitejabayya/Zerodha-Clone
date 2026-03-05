const { render, screen } = require('@testing-library/react');
const Education = require('../../../../src/components/Education');

test('renders Education component', () => {
    render(<Education />);
    const linkElement = screen.getByText(/Education/i);
    expect(linkElement).toBeInTheDocument();
});