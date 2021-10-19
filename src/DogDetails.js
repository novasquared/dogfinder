import React from "react";
import { useParams, Redirect } from "react-router-dom";

/** Renders the details for each dog
 *  
 *  State: None
 *  Props: None
 * 
 *  Route -> DogDetails
 */
function DogDetails({dogs}) {
    const { name } = useParams();
    const dog = dogs.find(dog => dog.name.toLowerCase() === name);

    if (dog === undefined) {
        return <Redirect to="/dogs"/>
    }

    return (
        <div>
            <h3>Details about {dog.name}</h3>
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