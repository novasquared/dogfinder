import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <ul>
      <li><NavLink to="/DogList">Dogs</NavLink></li>
      {
        dogs.map(dog => {
          return <li key={dog.name}><NavLink to={`/DogDetails/${dog.src}`}>{dog.name}</NavLink></li>
        })
      }
    </ul>
  );
}
// end

export default Nav;