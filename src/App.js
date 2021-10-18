import { React, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Nav from "./Nav";
import Routes from "./Routes";
import GetDogsInfo from "./GetDogsInfo";

/**
 * App retrieves info from the database and shows the /dogs page
 * 
 * State: dogInfo 
 * Props: None
 * 
 * App -> {Nav, Routes, GetDogsInfo}
 */

function App() {
  const [dogInfo, setDogInfo] = useState(null);

  /** Sets dogInfo state based on information from the db */
  function updateDogs(dogs) {
    setDogInfo(dogs);
  }

  return (
    <div>
      {
        (dogInfo)
          ? <div className="App">
            <BrowserRouter>
              <Nav dogs={dogInfo} />
              <Routes dogs={dogInfo}/>
            </BrowserRouter>
          </div>
          : <GetDogsInfo updateDogs={updateDogs} /> //get the info, show loading, update the state
      }
    </div>
  )

}

export default App;
