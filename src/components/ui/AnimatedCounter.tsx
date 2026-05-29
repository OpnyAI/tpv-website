"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  to,
  suffix = "",
  duration = 1400,
  className,
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || hasAnimatedRef.current || to <= 0) {
      return;
    }

    const observedElement = element;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const animationDuration = mobileQuery.matches
      ? 1080
      : Math.min(duration * 1.2, 1440);

    function easeOutCubic(progress: number) {
      return 1 - Math.pow(1 - progress, 3);
    }

    function animate(timestamp: number) {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTimeRef.current) / animationDuration,
        1,
      );
      const nextValue = Math.round(easeOutCubic(progress) * to);

      setCurrent(nextValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      setCurrent(to);
      animationFrameRef.current = null;
    }

    function startAnimation() {
      if (hasAnimatedRef.current) {
        return;
      }

      hasAnimatedRef.current = true;

      if (reducedMotion) {
        setCurrent(to);
        return;
      }

      startTimeRef.current = null;
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    function isElementVisible() {
      const rect = observedElement.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        observer.disconnect();
        startAnimation();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: [0, 0.1, 0.2] },
    );

    observer.observe(observedElement);

    const visibilityCheckFrame = requestAnimationFrame(() => {
      if (!hasAnimatedRef.current && isElementVisible()) {
        observer.disconnect();
        startAnimation();
      }
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(visibilityCheckFrame);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [duration, to]);

  return (
    <span ref={elementRef} className={className}>
      {current}
      {suffix}
    </span>
  );
}
