import './addcarform.css';
import useInput from '../hocks/useInput';

function AddCarForm({onAddCar}) {

    let name = useInput()
    let img = useInput()
    let price = useInput()

    const onAdd = (e) => {
        e.preventDefault()
        if(typeof onAddCar === 'function') {
            onAddCar({
                name: name.value,
                img: img.value,
                price: price.value
            })
        }
    }

    return (
        <form className="form">
            <input className="form__content" {...name} type="name" name="name" placeholder="Введите марку авто" />
            <input className="form__content" {...price} type="text" name="price" placeholder="Введите цену" />
            <input className="form__content" {...img} type="url" name="img" placeholder="Введите url картинки" />
            <button className='btn' onClick={onAdd}>Cохранить</button>
        </form>
    )
}

export default AddCarForm;