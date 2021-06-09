import { useState } from 'react';

export default function useInputState(initialVal) {
    const [value, setValue] = useState(initialVal);
    const handleChange = (evt) => {
        setValue(evt.target.value)
    };
    const reset = () => {
        setValue("")
    };
    return [value, handleChange, reset]
};