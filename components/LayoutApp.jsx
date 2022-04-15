import Head from 'next/head';
import cn from 'classnames';
import useShowScroll from '../scripts/libs/useShowScroll';
import ScrollTopButton from './ScrollTopButton';

export default function LayoutApp({ children }) {
  const { showScroll } = useShowScroll(465);

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
          { 'translate-x-24': !showScroll },
          { 'translate-x-0': showScroll }
        )}
      >
        <ScrollTopButton />
      </div>
    </div>
  );
}
