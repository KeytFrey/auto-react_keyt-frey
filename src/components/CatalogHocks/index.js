import './cataloghocks.css';
import '../Catalog/catalog.css';

import CardHocks from "../CardHocks";
import {useState, useEffect, useContext} from 'react';

import Modal from '../Modal';
import AddCarForm from '../AddCarForm';

import {AuthContext} from '../../AuthContext';

function CatalogHocks (props) {


    let {user} = useContext(AuthContext)
    const [isAdd, setIsAdd] = useState(false)
    const [cars, setCars] = useState([])

    useEffect(() =>{

        fetch('http://localhost:3000/cars.json')
            .then((cars) => cars.json())
            .then((cars) =>
                setCars(cars)
            )
    }, [])

   const addCar = (car) => {
        setCars([...cars, car])
        setIsAdd(false)
    }


   function deleteCars (index) {
    cars.splice(index, 1)
    setCars([...cars])
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
                            <button className=' btn btndel' onClick={() => deleteCars(index)}>Удалить</button>
                        )}
                        </CardHocks>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CatalogHocks;