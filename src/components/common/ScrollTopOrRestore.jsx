import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOrRestore() {
  const location = useLocation();

  useEffect(() => {
    const savedPosition = sessionStorage.getItem(location.pathname);

    if (savedPosition) {
      window.scrollTo(0, Number(savedPosition));
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(location.pathname, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return null;
}