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

    if (!element || hasAnimatedRef.current) {
      return;
    }

    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    if (!desktopQuery.matches) {
      hasAnimatedRef.current = true;
      const timeout = window.setTimeout(() => setCurrent(to), 0);
      return () => window.clearTimeout(timeout);
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function animate(timestamp: number) {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTimeRef.current) / duration,
        1,
      );
      const nextValue = Math.round(progress * to);

      setCurrent(nextValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      setCurrent(to);
      animationFrameRef.current = null;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        hasAnimatedRef.current = true;

        if (reducedMotion) {
          setCurrent(to);
          observer.disconnect();
          return;
        }

        startTimeRef.current = null;
        animationFrameRef.current = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
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
