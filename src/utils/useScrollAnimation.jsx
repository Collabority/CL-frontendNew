import { useEffect } from "react";

// Hook to animate a single element by id on scroll into view
export function useAnimateElementById(id, options = { threshold: 0.3 }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const target = document.getElementById(id);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.remove("opacity-0", "translate-y-20");
          target.classList.add("opacity-100", "translate-y-0");
          observer.disconnect();
        }
      },
      options
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [id, options]);
}

// Hook to animate all elements by class name on scroll into view
export function useAnimateElementsByClass(className, options = { threshold: 0.2 }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(`.${className}`);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-20");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      options
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [className, options]);
}
