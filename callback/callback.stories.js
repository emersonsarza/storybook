import React, { useState } from 'react';
import { withKnobs, button } from '@storybook/addon-knobs';
import { getData } from './funtions';
export default {
    title: "Addons/Knobs/Button/Callbacks",
    decorators: [withKnobs],
}

export const usingUseState = () => {
    const [num, setNum] = useState(0);
    const incrementNum = () => setNum(num+1);
    const decrementNum = () => setNum(num-1);
    const resetNum = () => setNum(0);

    button('incrementNum', incrementNum);
    button('decrementNum', decrementNum);
    button('resetNum', resetNum);
    return (
        <div>
            <h1> {num} </h1>
        </div>
    )
}

const FetchData = (setter) => {
    // Async Await not working???
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
    .then(res => res.json())
    .then(data => setter(data.results))
}

export const usingUserDefinedFunctions = () => {
    const [pokemons, setPokemons] = useState([]);
    button("Polulate Pokemons", FetchData.bind(null, setPokemons));
    
    return (
        <div> 
            <h1> Pokemons </h1>
            {
                pokemons.map(pokemon => <div> {pokemon.name} </div>)
            }
        </div>
    )
}

export const usingExportedFuntions = () => {
    const [numbers, setNumbers] = useState([]);
    const [strings, setStrings] = useState([]); 
    button('Show Numbers', setNumbers.bind(null, getData('numbers')));
    button('Show Alpha', setStrings.bind(null, getData('strings')));
    return (
        <>
            <h3> Numbers </h3>
            <div>
                {
                    numbers
                }
            </div>
            <h3> Strings </h3>
            <div>
                {
                    strings
                }
            </div>
        </>
    )
}