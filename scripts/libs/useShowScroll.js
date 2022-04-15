import { useState, useEffect } from 'react';
import throttle from './throttle';

export default function useShowScroll(scrollHeightTarget = 479) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const scrollHandler = throttle(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollHeightTarget) setShowScroll(true);
      else setShowScroll(false);
    }, 300);

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHeightTarget]);

  return { showScroll };
}
