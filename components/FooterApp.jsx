import Link from 'next/link';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export default function FooterApp() {
  return (
    <footer className='bg-slate-800 text-slate-100 text-center w-full'>
      <div className='container mx-auto px-4 py-6'>
        <Link href='/'>
          <a className='font-raleway font-bold text-xl'>RestoFerence</a>
        </Link>

        <ul className='flex justify-center items-center gap-2'>
          <li>
            <a
              className='inline-block text-xl p-4 focus:text-slate-400 hover:text-slate-400 transition-colors duration-300'
              href='https://twitter.com/syahdarom'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter account'
            >
              <FaTwitter title='Twitter icon' />
            </a>
          </li>

          <li>
            <a
              className='inline-block text-xl p-4 focus:text-slate-400 hover:text-slate-400 transition-colors duration-300'
              href='https://github.com/syahdaromansyah/restoference'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='RestoFerence GitHub repository'
            >
              <FaGithub title='GitHub icon' />
            </a>
          </li>
        </ul>

        <p className='text-sm max-w-[260px] xs:max-w-full mx-auto'>
          Build with{' '}
          <a
            className='inline-block text-slate-400 focus:underline hover:underline'
            href='https://nextjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Next
          </a>
          ,{' '}
          <a
            className='inline-block text-slate-400 focus:underline hover:underline'
            href='https://tailwindcss.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tailwind CSS
          </a>
          , and hosted on{' '}
          <a
            className='inline-block text-slate-400 focus:underline hover:underline'
            href='https://vercel.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vercel
          </a>
          .
        </p>

        <p className='mb-4 text-sm'>
          Dev by{' '}
          <a
            className='inline-block text-slate-400 focus:underline hover:underline'
            href='https://github.com/syahdaromansyah'
            target='_blank'
            rel='noopener noreferrer'
          >
            Syahda Romansyah
          </a>
          .
        </p>

        <p>Copyright &copy; 2022 RestoFerence.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
