import React from 'react';

function Character(props) {
    return (
        <div className='character'>
            <h3>{props.character.name}</h3>
        </div>
    )
}

export default Character