import Head from 'next/head';

export default function LayoutApp({ children }) {
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
    </div>
  );
}
