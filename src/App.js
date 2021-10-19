import { React, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Nav from "./Nav";
import Routes from "./Routes";
import axios from 'axios';

const DOG_API_URL = 'http://localhost:5000/dogs';

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
  const [isLoading, setIsLoading] = useState(true);


  /** Calls api to get dog info for App.js. After response is received,
 */
  async function getDogRequest() {
    console.log('getDogsRequest is running')
    const response = await axios.get(DOG_API_URL);
    const dogs = response.data;
    setDogInfo(dogs); //update dogInfo
    setIsLoading(false);
  }
  
  if (isLoading === true) {
    getDogRequest();
    return (<h2>Loading...</h2>)
  }

  return (
    <div>
      {
        <div className="App">
            <BrowserRouter>
              <Nav dogs={dogInfo} />
              <Routes dogs={dogInfo} />
            </BrowserRouter>
          </div>
      }
    </div>
  )

}

export default App;
