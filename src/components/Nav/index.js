import './nav.css';

import {useContext} from 'react';
import { Link } from "react-router-dom";

import {AuthContext} from '../../AuthContext';
import { useSelector } from 'react-redux';


function Nav() {
    let {user} = useContext(AuthContext)
    let menu = useSelector((state) => state.menu)

    return (
        <>
            <ul className='nav'>
                {menu.map(item => (
                    <Link className='navli' to = {item.url} key = {item.id}>{item.name}</Link>
                ))}
            </ul>
            {user && (
                <>
                    {user.login}
                    <button className='btn'>Мой профиль</button>
                </>
            )}
          </>
    )
}

export default Nav;