import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ children }) => {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop}>
        <dialog open className={classes.modal}>
          <button
            className={classes.closeButton}
            aria-label="Close"
            onClick={() => closeHandler()}
            type="button"
          >
            ✕
          </button>
          {children}
        </dialog>
      </div>
    </>
  );
};

export default Modal;
