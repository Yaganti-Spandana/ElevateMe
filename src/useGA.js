import ReactGA from "react-ga4";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

function useGA() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      console.warn("GA_MEASUREMENT_ID is not defined");
      return;
    }

    // Initialize GA4
    ReactGA.initialize(GA_MEASUREMENT_ID);

    // Track initial pageview
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    // Optional: track SPA route changes if using React Router
    const handleRouteChange = () => {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);
}

export default useGA;