import { useState, useEffect } from 'react';
import Head from 'next/head';
import cn from 'classnames';
import throttle from '../scripts/libs/throttle';
import ScrollTopButton from './ScrollTopButton';

export default function LayoutApp({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const scrollHandler = throttle(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 479) setShowScrollTop(true);
      else setShowScrollTop(false);
    }, 300);

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className='LayoutApp'>
      <Head>
        <link
          rel='icon'
          href='/assets/favicons/favicon.ico'
          type='image/x-icon'
        />

        <link rel='icon' href='/assets/favicons/favicon.png' type='image/png' />
      </Head>

      <div className='PageApp'>{children}</div>

      <div
        className={cn(
          'fixed bottom-4 right-4 transition duration-300',
          { 'translate-x-24': !showScrollTop },
          { 'translate-x-0': showScrollTop }
        )}
      >
        <ScrollTopButton />
      </div>
    </div>
  );
}
