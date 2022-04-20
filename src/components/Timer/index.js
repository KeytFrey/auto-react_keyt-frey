import { useRef, useState, useEffect } from "react";

function Timer () {
    let [timer, setTimer] = useState(0);
    let [counter, setCounter] = useState(0);
    let numRef = useRef(1)
    let myRef = useRef(null)

    const plus = () => {
        setCounter((prev) => prev + numRef.current);
    };

    const minus = () => {
        setCounter((prev) => prev - numRef.current);
    };

    const startTimer = () => {
        myRef.current = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(myRef.current);
    }

    return (
        <div>
            <h3>Counter</h3>
            {counter}<br />
            <button onClick={minus}>Минус</button> <button onClick={plus}>Плюс</button><br /><br />
            <h3>Timer</h3>
            {timer} <br />
            <button onClick={startTimer}>Старт</button> <button onClick={stopTimer}>Стоп</button><br /><br />
        </div>
    )
}

export default Timer;