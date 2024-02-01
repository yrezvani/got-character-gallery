// CharacterGallery.jsx
import React from 'react';
import Character from './Character';
import charactersData from '../data/characterData.json';

const CharacterGallery = () => {
    return (
        <div>
            {charactersData.map((character) => (
                <Character key={character.id} {...character} />
            ))}
        </div>
    );
};

export default CharacterGallery;
