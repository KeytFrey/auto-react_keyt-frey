import { useEffect, useState } from "react";

function useCounter (initialState = 0) {

    let [value, setValue] = useState(initialState)

    const sumCounter = () => {
        setValue(value + 1)
    }

    const minCounter = () => {
        setValue(value - 1)
    }

    return {
        value,
        sumCounter,
        minCounter
    }
}

export default useCounter;