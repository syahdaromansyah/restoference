import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth'>
      <Head>
        <meta name='theme-color' content='#1e293b' />

        <link rel='manifest' href='/app.webmanifest' />

        <link
          rel='apple-touch-icon'
          href='/assets/icons/restoference-180x180.png'
        />

        <link rel='preconnect' href='https://fonts.googleapis.com' />

        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Raleway:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-slate-100 font-inter text-slate-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
