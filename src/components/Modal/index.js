
import './modal.css';

function Modal ({show, onModalClose, children}) {

    const onClose = () => {
        if(typeof onModalClose === 'function') {
            onModalClose()
        }

    }

    if(show) {
        return (
            <div className="modal" id="modal">
                <div className="modal_content">
                    {children}
                    <button className="btn__close" type="button"   onClick={onClose}></button>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}

export default Modal;