"use client";

import { useEffect } from "react";

const parallaxSelector = "[data-parallax]";
const revealSelector = "[data-reveal]";

export default function ScrollMotion() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>(parallaxSelector),
    );

    if (!elements.length && !parallaxElements.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => {
        element.setAttribute("data-reveal-visible", "true");
      });

      parallaxElements.forEach((element) => {
        element.style.setProperty("--parallax-y", "0px");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          element.setAttribute("data-reveal-visible", "true");
          currentObserver.unobserve(element);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    elements.forEach((element) => {
      element.setAttribute("data-reveal-visible", "false");

      const delay = element.dataset.revealDelay;

      if (delay) {
        element.style.setProperty("--reveal-delay", `${delay}ms`);
      }

      observer.observe(element);
    });

    let frameId = 0;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight;

      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const strength = Number(element.dataset.parallax ?? 14);
        const midpoint = rect.top + rect.height / 2;
        const distanceFromCenter = midpoint - viewportHeight / 2;
        const normalized = Math.max(-1, Math.min(1, distanceFromCenter / viewportHeight));
        const shift = normalized * -strength;

        element.style.setProperty("--parallax-y", `${shift.toFixed(2)}px`);
      });
    };

    const requestParallaxFrame = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateParallax();
      });
    };

    updateParallax();

    window.addEventListener("scroll", requestParallaxFrame, { passive: true });
    window.addEventListener("resize", requestParallaxFrame);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestParallaxFrame);
      window.removeEventListener("resize", requestParallaxFrame);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return null;
}
