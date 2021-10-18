import axios from 'axios';

const DOG_API_URL = 'http://localhost:5000/dogs';

/** Calls getDogRequest for async API request
 *  Renders Loading header
 * 
 * Props: updateDogs fn
 * State: none
 * 
 * App -> GetDogsInfo
 * 
 */
function GetDogsInfo({ updateDogs }) {
    _getDogRequest(updateDogs);
    return (
        <h2>
            Loading...
        </h2>
    )
}

/** Calls api to get dog info for App.js. After response is received,
 *  Calls the updateDogs function.
 */
async function _getDogRequest(updateDogs) {
    console.log('_getDogRequest is running');
    const response = await axios.get(DOG_API_URL);
    const dogs = response.data;
    updateDogs(dogs);
}

export default GetDogsInfo;