import { ChevronUpIcon } from '@heroicons/react/outline';

export default function ScrollTopButton() {
  const scrollTopHandler = () => window.scrollTo(0, 0);

  return (
    <div className='ScrollTopButton'>
      <button
        className='bg-gradient-to-br from-orange-200 to-yellow-200 shadow shadow-slate-800/20 p-2 rounded-md'
        onClick={scrollTopHandler}
      >
        <ChevronUpIcon className='h-5 md:h-6 w-5 md:w-6' aria-hidden='true' />
        <span className='inline-block fixed left-[-9999px]'>Scroll to top</span>
      </button>
    </div>
  );
}
