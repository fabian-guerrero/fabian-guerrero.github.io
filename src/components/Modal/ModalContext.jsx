import { createContext } from "react";

export const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
  content: null,
});
