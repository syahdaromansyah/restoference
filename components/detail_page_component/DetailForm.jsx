import DetailRwForm from './DetailRwForm';

export default function DetailForm({
  dialogReviewHandler,
  submitStatusHandler,
  restaurantDetailData,
}) {
  return (
    <>
      <h2 className='font-raleway font-bold text-xl md:text-2xl mb-2 md:mb-4'>
        <span aria-hidden='true'>Review Form</span>
        <span className='inline-block fixed left-[-9999px]'>
          {`${restaurantDetailData.name} restaurant review form`}
        </span>
      </h2>

      <div>
        <DetailRwForm
          dialogReviewHandler={dialogReviewHandler}
          submitStatusHandler={submitStatusHandler}
        />
      </div>
    </>
  );
}
