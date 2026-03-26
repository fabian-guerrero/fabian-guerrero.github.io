import { useEffect } from "react";

export function useAnalytics() {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID;
    const isProd = import.meta.env.MODE === "production";

    console.log("Analytics: Hook running.");
    console.log(`Analytics: Production mode? ${isProd}`);
    console.log(`Analytics: GA_ID found? ${gaId ? "Yes" : "No"}`);

    if (!isProd || !gaId) {
      console.log("Analytics: Aborting. Conditions not met.");
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;

    script.onload = () => {
      console.log("Analytics: gtag.js script loaded successfully.");
      window.dataLayer = window.dataLayer || [];
      function gtag(...args) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", gaId);
      console.log(`Analytics: Configured with ID ${gaId}.`);
    };

    script.onerror = () => {
      console.error("Analytics: Failed to load the gtag.js script.");
    };

    document.head.appendChild(script);
    console.log("Analytics: Script injection initiated.");
  }, []);
}
