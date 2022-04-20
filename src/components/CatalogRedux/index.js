import './cataloghocks.css';
import '../Catalog/catalog.css';

import CardHocks from "../CardHocks";

import Modal from '../Modal';
import AddCarForm from '../AddCarForm';

import {useContext, useEffect, useState } from 'react'
import {AuthContext} from '../../AuthContext';


import { addCarsLoad, deleteCarsLoad, LoadMenu } from '../../store/actions/catalog-action';
import { useSelector, useDispatch } from 'react-redux';


function CatalogRedux (props) {

    const [isAdd, setIsAdd] = useState(false)
    let {user} = useContext(AuthContext)
    let dispatch = useDispatch()
    let cars = useSelector((state) => state.catalog)

    useEffect(() => {
        dispatch(LoadMenu())
    }, [dispatch])

    const addCar = (car) => {
        dispatch(addCarsLoad(car))
        setIsAdd(false)
    }

    const deleteCars = (car) => {
        dispatch(deleteCarsLoad(car))
    }

    return (
        <div>
            {user && (
                <>
                    <button className='btn btnapp' onClick={() => setIsAdd(true)}>Добавить машину</button>
                    <Modal show={isAdd} onModalClose={() => setIsAdd(false)}>
                        <AddCarForm onAddCar={addCar}/>
                    </Modal>
                </>
            )}

            <div className='Catalog'>
                {cars.map((car, index) => (
                    <div className='catalog_content' key={car.id}>
                        <CardHocks data={car}>
                        {user && (
                            <button className=' btn btndel' onClick={() => deleteCars(car)}>Удалить</button>
                        )}
                        </CardHocks>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CatalogRedux;