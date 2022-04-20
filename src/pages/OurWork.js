import Counter from '../components/Counter/index';
import Timer from '../components/Timer/';

import {useContext} from 'react';
import {AuthContext} from '../AuthContext';
import MenuRedux from '../components/MenuRedux';
import AddMenuItemRedux from '../components/AddMenuItemRedux';

function OurWorkPage () {

    let {user} = useContext(AuthContext)



    if(!user) {
        return (
            <>
                <h2>Наши работы</h2>
                <div>Доступ к этой странице ограничен!!!
                </div>
            </>
        )

    } else {
        return (
            <>
                <h2>Наши работы</h2>
                <h3>Каунтур</h3>
                <Counter />
                <h3>Timer</h3>
                <Timer />
                <h3>Редактировать меню</h3>
                <MenuRedux />
                <h4>Добавить пункт в меню</h4>
                <AddMenuItemRedux />
            </>
        )
    }
}

export default OurWorkPage;