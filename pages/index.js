import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import restaurantImg from '../public/assets/images/restaurant-image-1.jpg';
import PrimaryLink from '../components/PrimaryLink';
import NavApp from '../components/NavApp';

export default function Home() {
  const [showHeaderImg, setShowHeaderImg] = useState(false);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([htmlElement]) => {
      const lgBreakpoint = 1024;
      if (htmlElement.contentRect.width >= lgBreakpoint) setShowHeaderImg(true);
      else setShowHeaderImg(false);
    });

    resizeObserver.observe(document.documentElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className='HomePage'>
      <Head>
        <title>Find Restaurant With No Time | RestoFerence</title>
      </Head>

      <header className='HeaderSection bg-gradient-to-br from-orange-100 to-yellow-100'>
        <div className='container mx-auto px-8 pt-4 lg:pt-6 xl:pt-8 pb-20 xl:pb-24'>
          <div className='max-w-6xl mx-auto'>
            <div className='NavApp mb-16 xl:mb-24'>
              <NavApp />
            </div>

            <div
              id='HeaderBanner'
              className='HeaderBanner lg:grid lg:grid-cols-2 lg:items-center'
            >
              <div className='text-center lg:text-left'>
                <div className='mb-8 2xs:mb-10'>
                  <h1 className='font-raleway font-bold text-3xl 2xs:text-4xl mb-2 lg:mb-6 2xs:mb-4 md:text-5xl xl:text-6xl max-w-md lg:max-w-lg mx-auto lg:mx-0'>
                    Find Restaurant With No Time
                  </h1>

                  <p className='text-lg max-w-md mx-auto lg:mx-0'>
                    Explore more your restaurant destination in anywhere and
                    anytime just on your hand.
                  </p>
                </div>

                <div>
                  <PrimaryLink href='#'>
                    <span aria-hidden='true'>Explore now</span>
                    <span className='inline-block fixed top-[-9999px] left-[-9999px]'>
                      Go to explore section
                    </span>
                  </PrimaryLink>
                </div>
              </div>

              <div className='hidden lg:min-h-[325px] xl:min-h-[388px] lg:block lg:justify-self-end'>
                <div className='lg:max-w-xl'>
                  {showHeaderImg && (
                    <Image
                      className='rounded-[0.5em]'
                      src={restaurantImg}
                      alt='Image of indoor restaurant with many tables and empty seats.'
                      priority
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
