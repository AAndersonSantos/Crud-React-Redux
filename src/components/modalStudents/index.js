import React from 'react';
import Modal from 'react-modal';
import AddStudents from '../formAdd/formStudents/addStudents';
import "./styleModalStudents.scss"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '35%',
        height: '95%',
        border: '1px solid #ccc',
        borderRadius: '0.3rem',
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
        <div className='modal-students'>
            <button className="m-3 btn btn-success" onClick={openModal}><span>Add</span></button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <button className='btn-fechar' onClick={closeModal}>X</button>
                < AddStudents />
            </Modal>
        </div>
    );
}

export default ComponentModal;