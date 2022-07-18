import React, { useState } from 'react';
import Modal from 'react-modal';
import AddTutorial from '../AddTutorial';
import "./styleModalTutorials.css"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

function ComponentModal() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button className="m-3 btn btn-success" onClick={openModal}><span>Adicionar</span></button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <button className='btn-fechar' onClick={closeModal}>X</button>
                < AddTutorial />
            </Modal>
        </div>
    );
}

export default ComponentModal;