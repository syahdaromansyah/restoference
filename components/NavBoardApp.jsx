import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { XIcon } from '@heroicons/react/outline';

export default function NavBoardApp({ navBoardAppState, navBoardAppHandler }) {
  const navBoardAppElement = useRef();
  const nextRouter = useRouter();

  const linkNavBoardAppHandler = (e) => {
    if (nextRouter.asPath === e.target.pathname) navBoardAppHandler();
  };

  useEffect(() => {
    const addNavBoardAppAnim = setTimeout(
      () =>
        navBoardAppElement.current.classList.add(
          'transition-transform',
          'duration-300'
        ),
      300
    );

    return () => {
      clearTimeout(addNavBoardAppAnim);
    };
  }, []);

  useEffect(() => {
    let addNavBoardAppAnim = null;
    if (navBoardAppState === 'open') {
      document.body.classList.add('overflow-hidden');
      navBoardAppElement.current.classList.remove('invisible');
      addNavBoardAppAnim = setTimeout(() => {
        navBoardAppElement.current.classList.remove('translate-x-full');
      }, 300);
    } else {
      document.body.classList.remove('overflow-hidden');
      navBoardAppElement.current.classList.add('translate-x-full');
      addNavBoardAppAnim = setTimeout(() => {
        navBoardAppElement.current.classList.add('invisible');
      }, 300);
    }

    return () => {
      clearTimeout(addNavBoardAppAnim);
    };
  }, [navBoardAppState]);

  return (
    <div
      className='NavBoardApp bg-slate-800 text-slate-100 fixed top-0 left-0 h-screen w-full translate-x-full invisible z-[100]'
      ref={navBoardAppElement}
    >
      <nav className='flex justify-center items-center h-full w-full'>
        <ul className='text-center'>
          <li className='mb-4 2xs:mb-6'>
            <Link href='/'>
              <a
                className='inline-block font-raleway font-bold text-2xl 2xs:text-3xl'
                onClick={linkNavBoardAppHandler}
              >
                RestoFerence
              </a>
            </Link>
          </li>

          <li>
            <Link href='/explore'>
              <a
                className='inline-block text-xl 2xs:text-2xl px-4 py-3 mb-2'
                onClick={linkNavBoardAppHandler}
              >
                Explore
              </a>
            </Link>
          </li>

          <li>
            <Link href='/favorite'>
              <a
                className='inline-block text-xl 2xs:text-2xl px-4 py-3 mb-2'
                onClick={linkNavBoardAppHandler}
              >
                Favorite
              </a>
            </Link>
          </li>

          <li>
            <a
              className='inline-block text-xl 2xs:text-2xl px-4 py-3 mb-2'
              href='https://github.com/syahdaromansyah/restoference'
              target='_blank'
              rel='noopener noreferrer'
            >
              About
            </a>
          </li>

          <li className='fixed bottom-8 right-8'>
            <button onClick={navBoardAppHandler}>
              <XIcon className='text-slate-100 h-12 w-12' />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
