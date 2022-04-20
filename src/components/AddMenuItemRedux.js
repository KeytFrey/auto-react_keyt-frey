import {useDispatch} from 'react-redux'
import useInput from '../components/hocks/useInput'

import {ADD_MENU_ITEM} from '../store/actions/menu-redux-action'

function AddMenuItemRedux () {

    let dispatch = useDispatch()

    let name = useInput('')
    let url = useInput('')


    const addItem = (e) => {
        e.preventDefault()
        dispatch({
            type: ADD_MENU_ITEM,
            payload: {
                name: name.value,
                url: url.value
            }
        })
    }

    return (
        <form>
            <div>
                <label>
                    Заголовок<br/>
                    <input {...name}/>
                </label>
            </div>
            <div>
                <label>
                    URL<br/>
                    <input {...url}/>
                </label>
            </div><br></br>
            <button className='btn' onClick={addItem}>Сохранить</button>
        </form>
    )
}

export default AddMenuItemRedux;