import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/outline';
import NavBoardApp from './NavBoardApp';

export default function NavApp() {
  const [navBoardAppState, setNavBoardAppState] = useState('close');

  const navBoardAppHandler = () => {
    if (navBoardAppState === 'close') setNavBoardAppState('open');
    else setNavBoardAppState('close');
  };

  return (
    <div className='NavApp'>
      <nav className='flex justify-between items-center w-full'>
        <div className='NavAppLeft'>
          <Link href='/'>
            <a className='inline-block font-raleway font-bold text-xl md:text-2xl'>
              RestoFerence
            </a>
          </Link>
        </div>

        <div className='NavAppRight'>
          <div className='NavAppRightBars flex items-center md:hidden'>
            <button
              onClick={navBoardAppHandler}
              aria-label='Open navigation board'
            >
              <MenuIcon
                className='text-slate-800 h-12 w-12'
                aria-hidden='true'
              />
            </button>
          </div>

          <div className='NavAppRightMenu hidden md:block'>
            <ul className='flex items-center gap-2'>
              <li>
                <Link href='/explore'>
                  <a className='inline-block font-raleway font-semibold px-4 py-2 transition-colors duration-200'>
                    Explore
                  </a>
                </Link>
              </li>

              <li>
                <Link href='/favorite'>
                  <a className='inline-block font-raleway font-semibold px-4 py-2 transition-colors duration-200'>
                    Favorite
                  </a>
                </Link>
              </li>

              <li>
                <a
                  className='inline-block font-raleway font-semibold px-4 py-2 fo transition-colors duration-200'
                  href='https://github.com/syahdaromansyah/restoference'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='NavBoardApp'>
        <NavBoardApp
          navBoardAppState={navBoardAppState}
          navBoardAppHandler={navBoardAppHandler}
        />
      </div>
    </div>
  );
}
