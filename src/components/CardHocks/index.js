import "./cardhocks.css"

import {useEffect} from "react";

function СardHocks({data: {name, price, img}, children}) {

       useEffect(() => {

        return () => {

        }

    }, [])

    return (
        <div className="card">
            <div className="card-img">
                <img
                    src={img}
                    alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{price} $</p>
            {children}
        </div>
    )
}

export default СardHocks;