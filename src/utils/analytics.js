import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID;
const isProd = import.meta.env.MODE === "production";

/**
 * Initializes Google Analytics if in production mode and a GA_ID is provided.
 */
export const initGA = () => {
  if (isProd && GA_ID) {
    ReactGA.initialize(GA_ID);
    console.log(`GA Initialized with ID: ${GA_ID}`);
  }
};

/**
 * Tracks a page view if in production mode.
 * @param {string} path - The path of the page to track.
 */
export const trackPageView = (path) => {
  if (isProd && GA_ID) {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

/**
 * Tracks a custom event if in production mode.
 * @param {object} params - The event parameters.
 * @param {string} params.category - The event category.
 * @param {string} params.action - The event action.
 * @param {string} [params.label] - The event label (optional).
 * @param {number} [params.value] - The event value (optional).
 */
export const trackEvent = ({ category, action, label, value }) => {
  if (isProd && GA_ID) {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};
