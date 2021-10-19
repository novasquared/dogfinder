import Routes from './Routes';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
const DOGS = [
  {
    "name": "Whiskey",
    "age": 5,
    "src": "whiskey",
    "facts": [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    "name": "Duke",
    "age": 3,
    "src": "duke",
    "facts": [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    "name": "Perry",
    "age": 4,
    "src": "perry",
    "facts": [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  }
];

it('renders the doglist page', function () {
  const { debug, getByText, container } = render(
    <MemoryRouter initialEntries={["/dogs"]}>
      <Routes dogs={DOGS}/>
    </MemoryRouter>
  );

  const h1Text = getByText(/Dogs available for adoption!/i);
  expect(h1Text).toBeInTheDocument();

  //checks that all dogs are in the DOM
  const links = container.querySelectorAll("h3")
  expect(links).toHaveLength(3);
});

it('render individual dog page', function () {
  const { debug, container, getByText } = render(
    <MemoryRouter initialEntries={["/dogs/whiskey"]}>
      <Routes dogs={DOGS}/>
    </MemoryRouter>
  );
  const h3Text = getByText(/Details about Whiskey/i);
  expect(h3Text).toBeInTheDocument();
  
  //all facts are on DOM
  const facts = container.querySelectorAll("li")
  expect(facts).toHaveLength(3)
});

