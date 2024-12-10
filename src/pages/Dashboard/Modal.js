import React from 'react';

const Modal = ({ isOpen, closeModal, onConfirm, children }) => {
    if (!isOpen) return null; // If modal is not open, render nothing

    return (
        <div style={modalOverlayStyles}>
            <div style={modalContentStyles}>
                <div>{children}</div>
                <div style={modalFooterStyles}>
                    <button onClick={closeModal} style={closeButtonStyles}>Close</button>
                    <button onClick={onConfirm} style={confirmButtonStyles}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

// Modal styles
const modalOverlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
};

const modalContentStyles = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '800px',
    maxHeight: '80%',
    overflowY: 'auto',
};

const modalFooterStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
};

const closeButtonStyles = {
    padding: '10px 20px',
    backgroundColor: '#ccc',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
};

const confirmButtonStyles = {
    padding: '10px 20px',
    backgroundColor: '#00BDA9',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    borderRadius: '5px',
};

export default Modal;
