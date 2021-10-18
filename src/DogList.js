import React from "react";
import './DogList.css';

/** Renders the list of dogs for adoption
 *  
 *  Props: [{dog1}, {dog2},...]
 *  State: None
 * 
 *  Route -> DogList
 */
function DogList({ dogs }) {
    return (
        <div>
            {
                dogs.map(dog => {
                    return (
                        <div key={dog.src}>
                            <h3>{dog.name}</h3>
                            <img src={`/${dog.src}.jpg`}
                                alt={`cute pic of ${dog.name}`}
                            />
                            <p>Age: <b>{dog.age}</b></p>
                            <h4>Facts: </h4>
                            <ul>
                                {dog.facts.map((fact, idx) => {
                                    return <li key={idx}>{fact}</li>
                                })}
                            </ul>
                        </div>)
                })
            }
        </div>
    )
}

export default DogList;