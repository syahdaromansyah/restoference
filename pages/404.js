import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryLink from '../components/PrimaryLink';

export default function NotFound() {
  const [pagePath, setPagePath] = useState('');
  const nextRouter = useRouter();

  useEffect(() => {
    setPagePath(nextRouter.asPath);
  }, [nextRouter.asPath]);

  return (
    <div className='NotFoundPage'>
      <div className='container mx-auto px-8 h-screen w-full overflow-hidden'>
        <div className='flex justify-center items-center h-full'>
          <div className='break-words text-center w-full'>
            <h1 className='font-raleway font-bold text-xl 2xs:text-2xl md:text-4xl lg:text-6xl mb-2 md:mb-4 lg:mb-6'>
              Oops! Page Not Found.
            </h1>

            <p className='2xs:text-xl mb-6'>
              Sorry, <span className='font-bold'>{pagePath}</span> is not found.
            </p>

            <Link href='/' passHref>
              <PrimaryLink>Back to homepage</PrimaryLink>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
