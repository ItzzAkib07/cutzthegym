import React, { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ end = 10000, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const target = typeof end === 'number' ? end : parseInt(String(end).replace(/\D/g, ''), 10) || 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  const formattedCount = count.toLocaleString('en-IN');

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{formattedCount}{suffix}
    </span>
  );
}

