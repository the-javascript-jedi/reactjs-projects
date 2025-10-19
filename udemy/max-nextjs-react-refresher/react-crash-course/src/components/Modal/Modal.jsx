import classes from "./Modal.module.css";

const Modal = ({ children, OnClose }) => {
  return (
    <>
      <div className={classes.backdrop}>
        <button
          className={classes.closeButton}
          aria-label="Close"
          onClick={() => OnClose?.()}
          type="button"
        >
          ✕
        </button>
        <dialog open className={classes.modal}>
          {children}
        </dialog>
      </div>
    </>
  );
};

export default Modal;
