import {useSelector, useDispatch} from 'react-redux'
import { deleteItem } from '../../store/actions/menu-redux-action'

function MenuRedux () {

    let dispatch = useDispatch((state) => state.menu)

    let menu = useSelector((state) => state.menu)

    const deleteMenu = (item) => {
        dispatch(deleteItem(item))
    }

    return (
        <ul>
            {menu.map(item => (
                <li key={item.id}>
                    <a href={item.url}>{item.name}</a>
                    <button onClick={() => deleteMenu(item)} className='btn'>Удалить</button>
                </li>
            ))}
        </ul>
    )
}

export default MenuRedux;