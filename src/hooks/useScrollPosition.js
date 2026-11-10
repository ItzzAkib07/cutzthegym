import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    direction: 'none',
    progress: 0
  });

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentY / totalHeight) * 100 : 0;
      const direction = currentY > lastY ? 'down' : currentY < lastY ? 'up' : 'none';

      setScrollPosition({
        x: window.scrollX,
        y: currentY,
        direction,
        progress: Math.min(100, Math.max(0, progress))
      });

      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

