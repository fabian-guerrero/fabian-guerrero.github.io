import { useState, useCallback } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = useCallback((content) => {
    setContent(content);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setContent(null);
    document.body.style.overflow = "auto";
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, content }}>
      {children}
    </ModalContext.Provider>
  );
};
