import ReactGA from "react-ga4";

const isProduction = import.meta.env.VITE_IS_PRODUCTION === "true";
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initGA() {
  if (isProduction && GA_ID) {
    ReactGA.initialize(GA_ID);
  }
}

export function trackPageView(path) {
  if (isProduction) {
    ReactGA.send({ hitType: "pageview", page: path });
  }
}

export function trackEvent({ category, action, label, value }) {
  if (isProduction) {
    ReactGA.event({ category, action, label, value });
  }
}
