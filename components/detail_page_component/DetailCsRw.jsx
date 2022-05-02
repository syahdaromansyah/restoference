import DetailRwCard from './DetailRwCard';

export default function DetailCsRw({ restaurantDetailData }) {
  return (
    <>
      <h2 className='font-raleway font-bold text-xl md:text-2xl mb-2'>
        <span aria-hidden='true'>Customer Reviews</span>
        <span className='inline-block fixed left-[-9999px]'>
          {`${restaurantDetailData.name} customer reviews`}
        </span>
      </h2>

      <ul className='grid gap-4 mb-4'>
        {restaurantDetailData.customerReviews.map((review, reviewIdx) => (
          <li className='break-words overflow-hidden' key={reviewIdx}>
            <DetailRwCard
              restaurantDetailData={restaurantDetailData}
              reviewName={review.name}
              reviewDate={review.date}
              reviewMessage={review.review}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
