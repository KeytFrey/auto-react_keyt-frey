export const ADD_MENU_ITEM = 'ADD_MENU_ITEM';
export const DELETE_MENU_ITEM = 'DELETE_MENU_ITEM';

export const deleteItem = (item) => {
    return {
        type: DELETE_MENU_ITEM,
        payload: item
    }
}