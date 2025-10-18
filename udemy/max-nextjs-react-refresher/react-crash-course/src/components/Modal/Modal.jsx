import classes from "./Modal.module.css";

const Modal = ({ children, OnClose }) => {
  return (
    <>
      <div className={classes.backdrop}>
        <dialog open className={classes.modal}>
          {children}
        </dialog>
      </div>
    </>
  );
};

export default Modal;
