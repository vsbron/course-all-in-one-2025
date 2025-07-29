import { FaTimes } from "react-icons/fa";

import { useAppContext } from "./AppContext";

function Modal() {
  // Getting the modal state and toggle function from the Context API
  const { isModalOpen, toggleModal } = useAppContext();

  // Returned JSX
  return (
    <div className={`modal-overlay ${isModalOpen ? "show-modal" : ""}`}>
      <div className="modal-container">
        <h3>Modal content</h3>
        <button className="close-modal-btn" onClick={toggleModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal;
