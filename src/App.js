// import { Axios } from "axios";
import { React, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Nav from "./Nav";
import Routes from "./Routes";
import GetDogsInfo from "./GetDogsInfo";

function App() {
  const [dogInfo, setDogInfo] = useState(null);

  function updateDogs(dogs) {
    console.log('updateDogs is running', dogs);
    setDogInfo(dogs);
    console.log('passed setDogInfo')
  }


  return (
    <div>
      {
        (dogInfo)
          ? <div c lassName="App">
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
