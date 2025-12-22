import { useEffect } from "react";

export function useAnalytics() {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID;
    const isProd = import.meta.env.MODE === "production";

    
    if (!isProd || !gaId) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args) {
      window.dataLayer.push(args);
    }

    gtag("js", new Date());
    gtag("config", gaId);
  }, []);
}
