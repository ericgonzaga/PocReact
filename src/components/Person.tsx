import { useState } from 'react';

export default function Person ({ name = 'Test', showDescription = false }) {
    
    const [description, setDescription] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium repellendus reprehenderit laborum, harum amet, officia, sequi optio esse exercitationem error debitis molestias soluta qui. Iure nesciunt optio in eaque.");
    const [inputDescription, setInputDescription] = useState("");
    
    return (
        <>
            <h3>{name}</h3>
            { showDescription ? <p>{ description }</p> : <p></p> }
            <input onChange={(e) => setInputDescription(e.target.value) } value={ inputDescription } />
            <button onClick={() => setDescription(inputDescription)} >change</button>
        </>
    )
}