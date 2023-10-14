import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";


const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;