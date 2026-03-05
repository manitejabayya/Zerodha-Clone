const { render, screen } = require('@testing-library/react');
const Stats = require('../../../../src/components/home/Stats');

test('renders Stats component', () => {
    render(<Stats />);
    const element = screen.getByText(/some text in Stats component/i);
    expect(element).toBeInTheDocument();
});