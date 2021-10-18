import React from "react";
import { useParams } from "react-router-dom";

/** Renders the details for each dog
 *  
 *  State: None
 *  Props: None
 * 
 *  Route -> DogDetails
 */
// check if dog is defined and return a redirect inside this component.
// you can also use .find instead because it is more efficient because it stops as soon as it finds something.  It returns the item not an array.
function DogDetails({dogs}) {
    const { name } = useParams();
    const dog = dogs.find(dog => dog.name === name);
    return (
        <div>
            <h3>{dog.name}</h3>
            <img 
                src={`/${dog.src}.jpg`}
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
}


export default DogDetails;