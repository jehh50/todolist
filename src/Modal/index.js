import React from 'react';
import ReactDOM from 'react-dom';   // Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import './/modal.css';

function Modal({ children }){
    return ReactDOM.createPortal(      //  // ReactDom tiene este método para crear portales
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    );
}
export { Modal };
