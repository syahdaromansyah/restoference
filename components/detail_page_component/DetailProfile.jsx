import Image from 'next/image';
import CONFIG from '../../scripts/globals/CONFIG';
import {
  OfficeBuildingIcon,
  LocationMarkerIcon,
  StarIcon,
} from '@heroicons/react/solid';
import DetailFavButton from './DetailFavButton';

export default function DetailProfile({ restaurantDetailData }) {
  return (
    <div className='grid gap-4 md:gap-6 md:grid-cols-2 md:items-center'>
      <div>
        <div className='relative h-[180px] md:h-[220px] lg:h-[300px] rounded-md w-full overflow-hidden'>
          <Image
            src={`${CONFIG.BASE_IMAGE_URL_SMALL}${restaurantDetailData.pictureId}`}
            alt={`${restaurantDetailData.name} restaurant image`}
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
      </div>

      <div>
        <h1 className='font-raleway font-bold text-2xl md:text-4xl mb-2 md:mb-4'>
          <span aria-hidden='true'>{restaurantDetailData.name}</span>
          <span className='inline-block fixed left-[-9999px]'>
            {`Restaurant detail page name, ${restaurantDetailData.name}`}
          </span>
        </h1>

        <div className='mb-4'>
          <div className='flex items-center gap-1 mb-2'>
            <span className='inline-block' aria-hidden='true'>
              <OfficeBuildingIcon className='text-slate-800 h-5 w-5' />
            </span>

            <span className='inline-block' aria-hidden='true'>
              {restaurantDetailData.city}
            </span>

            <span className='inline-block fixed left-[-9999px]'>
              {`${restaurantDetailData.name} restaurant city location, ${restaurantDetailData.city}`}
            </span>
          </div>

          <div className='flex items-center gap-1 mb-2'>
            <span className='inline-block'>
              <LocationMarkerIcon
                className='text-slate-800 h-5 w-5'
                aria-hidden='true'
              />
            </span>

            <span className='inline-block' aria-hidden='true'>
              {restaurantDetailData.address}
            </span>

            <span className='inline-block fixed left-[-9999px]'>
              {`${restaurantDetailData.name} restaurant address location, ${restaurantDetailData.address}`}
            </span>
          </div>

          <div className='flex items-center gap-1'>
            <span className='inline-block'>
              <StarIcon className='text-slate-800 h-5 w-5' aria-hidden='true' />
            </span>

            <span className='inline-block' aria-hidden='true'>
              {restaurantDetailData.rating}
            </span>

            <span className='inline-block fixed left-[-9999px]'>
              {`${
                restaurantDetailData.name
              } restaurant rating score, ${restaurantDetailData.rating
                .toString()
                .split('.')
                .join(' point ')}`}
            </span>
          </div>
        </div>

        <div className='mb-4'>
          <DetailFavButton restaurantDetailData={restaurantDetailData} />
        </div>

        <div>
          <h2 className='font-raleway font-bold text-xl mb-2'>
            <span aria-hidden='true'>Categories</span>
            <span className='inline-block fixed left-[-9999px]'>
              {`${restaurantDetailData.name} restaurant categories`}
            </span>
          </h2>

          <ul className='flex items-center gap-2'>
            {restaurantDetailData.categories.map((category) => (
              <li
                className='bg-slate-800 text-slate-100 px-2 py-1 rounded-md'
                key={category.name}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
