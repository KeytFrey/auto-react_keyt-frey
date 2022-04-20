import useCounter from "../hocks/useCounter.js";

function Counter () {

    let {value, sumCounter, minCounter} = useCounter(5);

    return (
        <div>
            {value}
            <button onClick={sumCounter}>+</button>
            <button onClick={minCounter}>-</button>
        </div>
    );
}

export default Counter;