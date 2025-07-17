import { useContext, useEffect, useState, useRef } from "react";
import { ModalContext } from "./ModalContext";
import gsap from "gsap";
import { FocusTrap } from "focus-trap-react";
import "./modal.scss";

const Modal = () => {
  const { isOpen, closeModal, content } = useContext(ModalContext);
  const modalRef = useRef();
  const backdropRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isVisible && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      );
    }
  }, [isVisible]);

  const handleClose = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          setIsVisible(false);
          closeModal();
        },
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isVisible) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="modal">
      <div
        className="modal-backdrop"
        ref={backdropRef}
        onClick={handleClose}
        aria-hidden="true"
      />
      <FocusTrap
        focusTrapOptions={{
          allowOutsideClick: true,
        }}
      >
        <div
          className="modal-container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          ref={modalRef}
          tabIndex={-1}
        >
          <button
            className="modal-close"
            aria-label="Close dialog"
            onClick={handleClose}
          >
            <i></i>
            <i></i>
          </button>
          {content}
        </div>
      </FocusTrap>
    </div>
  );
};

export default Modal;
