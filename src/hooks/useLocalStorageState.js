import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultVal) {
    // make a piece of state, based off of value in localstorage
    const [state, setState] = useState(() => {

        let val; // this will be return as the above state
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch (e) {
            val = defaultVal;
        }
        return val; // return val as the piece of state for [state, useState]
    })

    // use useEffect to update localStorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState]
}

export default useLocalStorageState;