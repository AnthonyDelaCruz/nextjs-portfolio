import React from "react";
import Modal from "react-modal";

export default function CustomModal({
  isOpen,
  onClose,
  children,
  customStyle,
}) {
  const handleClose = () => onClose();
  const customStyles = {
    ...customStyle,
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };
  return (
    <div className="container-modal">
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <span className="modal__close-btn" onClick={handleClose}>
          Close
        </span>
        <>{children}</>
      </Modal>
    </div>
  );
}
