import './catalog.css';

// import Card from "../Card"
import CardHocks from "../CardHocks"

import React from 'react';

import AddCarForm from '../AddCarForm';
import Modal from '../Modal';

import {AuthContext} from '../../AuthContext';

class Catalog extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props)
        this.addForm = this.addForm.bind(this)
        this.state = {
            isAddForm: false
        }

        this.state = {
            cars: [],
            cars2: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/cars.json')
            .then((cars) => cars.json())
            .then((cars) =>
                this.setState({
                    cars: cars
                })
            )

        fetch('http://localhost:3000/cars2.json')
            .then((cars2) => cars2.json())
            .then((cars2) =>
                this.setState({
                    cars2: cars2
                })
            )
    }

    delete(index) {
        let cars = this.state.cars
        cars.splice(index, 1)
        this.setState({ cars })
    }

    deletetwo(index) {
        let cars2 = this.state.cars2
        cars2.splice(index, 1)
        this.setState({ cars2 })
    }


    addForm(event) {
        console.log('addForm')
        this.setState({
            isAddForm: true
        })
    }

    addCar(car) {
        car.id = new Date().valueOf()
        let cars = this.state.cars
        cars.push(car)
        this.setState({ cars })
    }

    CloseModal() {
        this.setState({
            isAddForm: false
        })
    }

    render() {
        let {user} = this.context
        let cars = this.state.cars
        let cars2 = this.state.cars2
        let isAddForm = this.state.isAddForm

        return (
            <div>
                {user && (
                    <>
                        <button className='btn btnapp' onClick={(e) => this.addForm(e)}>Добавить машину</button>
                        <Modal show={isAddForm} onModalClose={this.CloseModal.bind(this)}>
                            <AddCarForm onAddCar={this.addCar.bind(this)}/>
                        </Modal>
                    </>
            )}
                <div className='Catalog'>
                    {cars.map((car, index) => (
                        <div className='catalog_content' key={car.id} >
                            <CardHocks data={car}>
                                {user && (
                                    <button className='btn btndel' onClick={() => this.delete(index)}>Удалить</button>
                                )}
                            </CardHocks>
                        </div>
                ))}
                </div>
                <div className="Catalog">
                    {cars2.map((car, index) => (
                        <div className='catalog_content' key={car.id} >
                            <CardHocks data={car}>
                            {user && (
                                <button className='btn btndel' onClick={() => this.deletetwo(index)}>Удалить</button>
                            )}
                            </CardHocks>
                        </div>
                ))}
                </div>
            </div>
        )
    }
}

export default Catalog;
