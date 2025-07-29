import { FaTimes } from "react-icons/fa";

import { useAppContext } from "./AppContext";

function Modal() {
  // Getting the isModalOpen and closeModal from the Context API
  const { isModalOpen, closeModal } = useAppContext();

  // Returned JSX
  return (
    <div className={`modal-overlay ${isModalOpen ? "show-modal" : ""}`}>
      <div className="modal-container">
        <h3>Modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal;
