import Routes from './Routes';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

it('renders the about page', function () {
  const { debug, getByText } = render(
    <MemoryRouter initialEntries={["/about"]}>
      <Routes />
    </MemoryRouter>
  );

  const h1Text = getByText(/This is the about page./i);
  expect(h1Text).toBeInTheDocument();
});

it('renders the blog page', function () {
  const { debug, container } = render(
    <MemoryRouter initialEntries={["/blog"]}>
      <Routes />
    </MemoryRouter>
  );

  const links = container.querySelectorAll("li a")
  expect(links).toHaveLength(3)
});

