import { createRoot } from "react-dom/client";
// import { ModalContainer } from "react-modal-global";
import { StrictMode } from "react";
import { ModalProvider } from "./modalContext";

import Navbar from "./components/Navbar/Nabar";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <StrictMode>
      <Navbar />
      <Hero />
      <Experience />
      <ModalProvider>
        <Work />
      </ModalProvider>
      <Footer />
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
