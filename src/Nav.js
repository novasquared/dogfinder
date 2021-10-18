import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li><NavLink to="/DogList">Dogs</NavLink></li>
      <li><NavLink to="/DogDetails/:dogName">{dogName}</NavLink></li>
    </ul>
  );
}
// end

export default Nav;