export default function ReviewCard({
  reviewName,
  reviewDate,
  reviewMessage,
  restaurantDetailData,
}) {
  return (
    <div className='bg-slate-800 shadow-md shadow-slate-800/40 text-slate-100 px-3 py-2 rounded-md'>
      <div className='mb-2'>
        <h3 className='font-raleway font-bold text-xl'>
          <span aria-hidden='true'>{reviewName}</span>
          <span className='inline-block fixed left-[-9999px]'>
            {`${restaurantDetailData.name} restaurant review name, ${reviewName}`}
          </span>
        </h3>

        <p className='text-slate-400 text-sm mb-4'>
          <span aria-hidden='true'>Reviewed on {reviewDate}</span>
          <span className='inline-block fixed left-[-9999px]'>
            {`${restaurantDetailData.name} restaurant ${reviewName} review date, ${reviewDate}`}
          </span>
        </p>
      </div>

      <p>
        <span aria-hidden='true'>{reviewMessage}</span>
        <span className='inline-block fixed left-[-9999px]'>
          {`${restaurantDetailData.name} restaurant ${reviewName} review text, ${reviewMessage}`}
        </span>
      </p>
    </div>
  );
}
