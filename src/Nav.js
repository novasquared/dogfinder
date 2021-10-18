import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Creates nav links for dog list page and each dog
 * 
 * State: none
 * Props: dogs [{dog1}, ...]
 * 
 * App -> Nav
 */
function Nav({ dogs }) {
  return (
    <ul>
      <li><NavLink to="/DogList">Dogs</NavLink></li>
      {
        dogs.map(dog => {
          return <li key={dog.name}><NavLink to={`/dogs/${dog.src}`}>{dog.name}</NavLink></li>
        })
      }
    </ul>
  );
}
// end

export default Nav;