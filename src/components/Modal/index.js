import React from 'react';
import ReactDOM from 'react-dom';

import './modal.scss'

const container = document.getElementById('modal')

const Modal = ({ children, header, footer }) => {
    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal-header">{header}</div>
                <div className="modal-body">{children}</div>
                <div className="modal-actions modal-footer">{footer}</div>
            </div>
        </div>
    ), container);
}

export default Modal;