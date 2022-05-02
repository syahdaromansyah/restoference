import { useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import PrimaryButton from '../PrimaryButton';

export default function ReviewDialog({
  submitStatus = 'reject',
  open = false,
  dialogReviewHandler = () => {},
}) {
  const dialogText = useRef();

  return (
    <Dialog
      open={open}
      onClose={dialogReviewHandler}
      className='fixed top-0 left-0 h-screen w-full overflow-y-auto z-[150]'
      initialFocus={dialogText}
    >
      <Dialog.Overlay className='bg-slate-900/60 backdrop-blur absolute top-0 left-0 h-full w-full z-20' />

      <div className='flex justify-center items-center px-4 h-full w-full'>
        <div className='text-center'>
          <div className='bg-slate-100 relative px-6 py-4 max-w-sm rounded-lg z-50'>
            <div className='mb-2'>
              {submitStatus === 'success' && (
                <CheckCircleIcon className='text-green-400 mx-auto h-12 w-12' />
              )}

              {submitStatus === 'reject' && (
                <XCircleIcon className='text-red-400 mx-auto h-12 w-12' />
              )}
            </div>

            <Dialog.Title className='mb-2'>
              {submitStatus === 'success' && (
                <span className='inline-block font-bold text-xl'>
                  Review Submitted
                </span>
              )}

              {submitStatus === 'reject' && (
                <span className='inline-block font-bold text-xl'>
                  Review Rejected
                </span>
              )}
            </Dialog.Title>

            <Dialog.Description className='text-slate-400 mb-6'>
              {submitStatus === 'success' &&
                'Hooray! Your review has been successfuly submitted. You can check your review on Customer Review section on this page.'}

              {submitStatus === 'reject' &&
                'Oops! Please fill your review name and review text with no all blank spaces.'}
            </Dialog.Description>

            <p
              className='absolute left-[-9999px]'
              ref={dialogText}
              tabIndex='-1'
            >
              {submitStatus === 'success' &&
                'Review submitted. Hooray! Your review has been successfuly submitted. You can check your review on Customer Review section on this page.'}

              {submitStatus === 'reject' &&
                'Review rejected. Oops! Please fill your review name and review text with no all blank spaces.'}
            </p>

            <PrimaryButton onClick={dialogReviewHandler}>
              <span aria-hidden='true'>Close</span>
              <span className='fixed left-[-9999px]'>Close review dialog</span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
