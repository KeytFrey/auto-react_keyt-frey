import useInput from '../hocks/useInput';
import './feedbackform.css';

function FeedBackForm() {

    let theme = useInput()
    let sub = useInput()
    let email = useInput()

    const clickSub = (e) => {
        e.preventDefault()
        console.log('тема', theme)
        console.log('email', email)
        console.log('сообщение', sub)

    }

    return (
        <form className="form">
            <input className="form__content" {...theme} type="text" name="text" placeholder="Введите тему" />
            <input className="form__content" {...email} type="email" name="email" placeholder="Введите email" />
            <textarea className="form__content form__textarea" {...sub} placeholder="Введите текст"/>
            <button className='btn' onClick={clickSub}>Отправить</button>
        </form>
    )
}

export default FeedBackForm;