import React from 'react';
import Nav from './Nav';
import {render} from '@testing-library/react';
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
]

// basic tests
it('renders without crashing', function() {
  render(
    <MemoryRouter>
      <Nav dogs={DOGS}/>
    </MemoryRouter>
  );
});

it('matches snapshot', function() {
  const container = render(
    <MemoryRouter>
      <Nav dogs={DOGS}/>
    </MemoryRouter>
  );
  expect(container.asFragment()).toMatchSnapshot();
});
// end basic tests

// full render
it('mounts without crashing', function() {
  const { getByText } = render(
    <MemoryRouter>
      <Nav dogs={DOGS}/>
    </MemoryRouter>
  );

  //checks dog list
  const DogListLink = getByText(/Dogs/i);
  expect(DogListLink).toBeInTheDocument();

  //checks single dog
  const Dog = getByText(/whiskey/i);
  expect(Dog).toBeInTheDocument();
});
