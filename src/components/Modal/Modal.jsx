import './Modal.css'

function Modal({ text }) {
    return (
        <div id='modal-background'>
            <div id="modal">
                <span id="cross">X</span>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Modal;
