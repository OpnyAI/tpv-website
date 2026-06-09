"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  to: number;
  shouldStart: boolean;
  suffix?: string;
  duration?: number;
  className?: string;
  dataTestId?: string;
};

export function AnimatedCounter({
  to,
  shouldStart,
  suffix = "",
  duration = 1400,
  className,
  dataTestId,
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0);
  const hasAnimatedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (
      !shouldStart ||
      hasAnimatedRef.current ||
      animationFrameRef.current !== null ||
      to <= 0
    ) {
      return;
    }

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
      hasAnimatedRef.current = true;
      animationFrameRef.current = null;
    }

    if (reducedMotion) {
      animationFrameRef.current = requestAnimationFrame(() => {
        setCurrent(to);
        hasAnimatedRef.current = true;
        animationFrameRef.current = null;
      });
    } else {
      startTimeRef.current = null;
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
        startTimeRef.current = null;
      }
    };
  }, [duration, shouldStart, to]);

  return (
    <span className={className} data-testid={dataTestId}>
      {shouldStart ? current : 0}
      {suffix}
    </span>
  );
}
