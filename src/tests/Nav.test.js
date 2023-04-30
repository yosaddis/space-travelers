import { BrowserRouter } from 'react-router-dom';
import render from './mocks/testUtils';
import Nav from '../components/Nav';

test('Home header test', () => {
  const { getByText, debug } = render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>,
  );
  debug();
  expect(getByText('Rockets')).toBeInTheDocument();
});
