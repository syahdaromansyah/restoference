export default function DetailAbout({ restaurantDetailData }) {
  return (
    <>
      <h2 className='font-raleway font-bold text-xl md:text-2xl mb-2'>
        <span aria-hidden='true'>About</span>
        <span className='inline-block fixed left-[-9999px]'>
          {`${restaurantDetailData.name} restaurant description`}
        </span>
      </h2>

      <p className='mb-4'>
        <span aria-hidden='true'>{restaurantDetailData.description}</span>

        <span className='inline-block fixed left-[-9999px]'>
          {`${restaurantDetailData.name} restaurant description, {restaurantDetailData.description}`}
        </span>
      </p>
    </>
  );
}
