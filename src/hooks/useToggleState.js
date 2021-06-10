import { useState } from 'react';

function useToggle(initialVal = false) {
    const [toggleVal, setToggleVal] = useState(initialVal);
    const toggle = () => {
        setToggleVal(!toggleVal);
    }
    return [toggleVal, toggle];
}

export default useToggle;