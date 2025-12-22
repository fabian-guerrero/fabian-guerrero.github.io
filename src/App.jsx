import { createRoot } from "react-dom/client";
// import { ModalContainer } from "react-modal-global";
import { StrictMode } from "react";
import { ModalProvider } from "./components/Modal/ModalProvider";
import Modal from "./components/Modal/Modal";

import Navbar from "./components/Navbar/Nabar";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

import { useAnalytics } from "./useAnalytics";

const App = () => {
  useAnalytics();

  return (
    <StrictMode>
      <ModalProvider>
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Work />
        </main>
        <Footer />
        <Modal />
      </ModalProvider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
