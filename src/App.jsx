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

import ReactGA from "react-ga4";
const TRACKING_ID = "G-6FK9MNVQPF";

if (import.meta.env.VITE_IS_PRODUCTION === "true") {
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page: "/index", title: "Home Page" });
}

const App = () => {
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
