import './formlogin.css';
import {useEffect, useContext} from 'react';
import useApi from '../hocks/useApi.js';
import useInput from '../hocks/useInput.js'
import { AuthContext } from '../../AuthContext';


function FormLogin() {

    let {user, setUser} = useContext(AuthContext)
    let {result, error, auth} = useApi()
    let email = useInput('')
    let password = useInput('')

    const onAuth = (e) => {
        e.preventDefault()
        auth(email.value, password.value)
    }

    useEffect(()=>{
        if(result !== null){
            setUser(result)
        }
        },[result])

    return (
        <form className="form">
            {error}
            <div className='form'>
                <input className="form__content" {...email}  type="email" name="email" placeholder="Ваш e-mail" />
                <input className="form__content"  {...password}  type="password" name="password" placeholder="Ваш пароль" />
                <button className = "btn" onClick={onAuth}>Войти</button>/&nbsp;
                <button className='btn' >Зарегистрироваться</button>
            </div>
        </form>
    )
}

export default FormLogin;