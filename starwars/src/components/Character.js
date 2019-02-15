import React from 'react';

function Character(props) {
    return (
        <div className='character'>
            <h2>{props.character.name}</h2>
            <p className="char-property">Birth Year: {props.character.birth_year}</p>
            <p className="char-property">Gender: {props.character.gender}</p>
            <p className="char-property">Height: {props.character.height} CM</p>
            <p className="char-property">Skin Color: {props.character.skin_color}</p>
            <p className="char-property">Hair Color: {props.character.hair_color}</p>
            <p className="char-property">Eye Color: {props.character.eye_color}</p>
            
            


            
        </div>
    )
}

export default Character