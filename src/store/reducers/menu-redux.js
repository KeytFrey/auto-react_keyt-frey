import {ADD_MENU_ITEM, DELETE_MENU_ITEM} from '../actions/menu-redux-action';

let menu = [
    {id: 1, name: "Главная", url: "/"},
    {id: 2, name: "О компании", url: "/about"},
    {id: 3, name: "Наши работы", url: "/our-works"},
    {id: 4, name: "Обратная связь", url: "/feed-back"}
]

export const menuReduxReducer = (state = menu, action) => {
    let item = action.payload;
    switch(action.type) {
        case ADD_MENU_ITEM:
            item.id = new Date().valueOf()
            return [...state, item]
        case DELETE_MENU_ITEM:
            return state.filter((elem) => elem.id !== item.id)
        default:
            return state
    }
}