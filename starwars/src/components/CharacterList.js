import React from 'react';

import Character from './Character'

const CharacterList = (props) => {
    return (
        <div>
            {props.characters.map((character, index) => {
                return <Character key = {index}
                    character = {character}
                    componentDidMount = {props.componentDidMount}
                    getCharacters = {props.getCharacters}
                    characters = {props.starwarsChars}


                />
            })}
        </div>

    );
}

export default CharacterList
