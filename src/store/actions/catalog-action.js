export const ADD_CAR = 'ADD_CAR';
export const APPDATE_CAR = 'APPDATE_CAR';
export const DELETE_CAR = 'DELETE_CAR';
export const LOAD_CAR = 'LOAD_CAR';

export const LoadMenu = () => {
    return (dispatch) => {
        fetch('/cars.json').then(async (cars) => {
            dispatch({
                type: LOAD_CAR,
                payload: await cars.json()
            })
        })
    }
}

export const addCarsLoad = (car) => {
    return {
        type: ADD_CAR,
        payload: car
    }
}

export const deleteCarsLoad = (car) => {
    return {
        type: DELETE_CAR,
        payload: car
    }
}

