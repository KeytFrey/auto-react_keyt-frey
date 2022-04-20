import './inout.css';

import React, { useContext, useEffect, useState } from 'react';
import Modal from '../Modal';
import FormLogin from '../FormLogin';
import { AuthContext } from '../../AuthContext';

function InOut () {

    let {user, setUser} = useContext(AuthContext)
    let [isLogin, setIslogin] = useState(false)


    function login(event) {
        setIslogin(true)
    }

    function logout(event) {
        setUser(null)
    }

    const CloseModal = () => {
        setIslogin(false)
    }

    useEffect(() => {
        if(user) {
            setIslogin(false)
        }
    }, [user])

    return (
        <div>
            <div>
                {user ? (
                    <button className='logout' onClick={logout}>Выйти</button>
                ) : (
                    <button className='login' onClick={login}>Войти</button>
                )}
            </div>
            <Modal show={isLogin} onModalClose={CloseModal}>
                <FormLogin />
            </Modal>
        </div>
    )
}

export default InOut;