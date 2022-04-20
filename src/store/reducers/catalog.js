
import {ADD_CAR, APPDATE_CAR, DELETE_CAR, LOAD_CAR} from '../actions/catalog-action';

export const catalogReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_CAR: {
            let car = action.payload;
            return [...state, car]
        }

        case APPDATE_CAR:
            return state
        case DELETE_CAR:
            let car = action.payload;
            return state.filter((item) => item.id !== car.id)
        case LOAD_CAR: {
            return [...action.payload]
        }
        default:
            return state
    }
}