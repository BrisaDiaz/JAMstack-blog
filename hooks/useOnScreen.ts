import React, { useState, useEffect } from "react";

export default function useOnScreen(
  ref: React.RefObject<any>,
  rootMargin = "0px",
  once?: boolean,
) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting && once) {
          observer.unobserve(entry.target);
        }
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      ref?.current && observer.unobserve(ref.current);
    };
  }, [ref, once, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}
