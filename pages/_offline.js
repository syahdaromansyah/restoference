import Link from 'next/link';
import PrimaryLink from '../components/PrimaryLink';

export default function NotFound() {
  return (
    <div className='NotFoundPage'>
      <div className='container mx-auto px-8 h-screen w-full overflow-hidden'>
        <div className='flex justify-center items-center h-full'>
          <div className='break-words text-center w-full'>
            <h1 className='font-raleway font-bold text-4xl 2xs:text-5xl mb-2 md:mb-4'>
              Oops! You are in offline mode.
            </h1>

            <p className='2xs:text-xl mb-6'>
              Sorry, please check your internet connection.
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
