import Link from 'next/link';
import Image from 'next/image';
import CONFIG from '../scripts/globals/CONFIG';
import wordsTruncate from '../scripts/libs/wordsTruncate';
import { LocationMarkerIcon, StarIcon } from '@heroicons/react/solid';
import SecondaryLink from './SecondaryLink';

export default function RestaurantCard({ restaurantData }) {
  return (
    <article className='RestaurantCard bg-slate-200 shadow-md shadow-slate-400/30 rounded-md pb-4 overflow-hidden'>
      <div className='relative h-[160px] 2xs:h-[180px] md:h-[220px] mb-4'>
        <Image
          src={`${CONFIG.BASE_IMAGE_URL_SMALL}${restaurantData.pictureId}`}
          alt={`${restaurantData.name} restaurant image`}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='px-2'>
        <h3 className='font-raleway font-bold text-xl 2xs:text-2xl mb-2 2xs:mb-3'>
          <span className='inline-block' aria-hidden='true'>
            {restaurantData.name}
          </span>

          <span className='inline-block fixed left-[-9999px]'>
            {`Restaurant name, ${restaurantData.name}`}
          </span>
        </h3>

        <div className='flex justify-between items-center mb-2 2xs:mb-3'>
          <div className='flex items-center gap-1'>
            <span className='inline-block' aria-hidden='true'>
              <LocationMarkerIcon className='text-slate-800 h-5 w-5' />
            </span>

            <span className='inline-block' aria-hidden='true'>
              {restaurantData.city}
            </span>

            <span className='inline-block fixed left-[-9999px]'>
              {`${restaurantData.name} restaurant city location, ${restaurantData.city}`}
            </span>
          </div>

          <div className='flex items-center gap-1'>
            <span className='inline-block' aria-hidden='true'>
              <StarIcon className='text-slate-800 h-5 w-5' />
            </span>

            <span className='inline-block' aria-hidden='true'>
              {restaurantData.rating}
            </span>

            <span className='inline-block fixed left-[-9999px]'>
              {`${
                restaurantData.name
              } restaurant rating score, ${restaurantData.rating
                .toString()
                .split('.')
                .join(' point ')}`}
            </span>
          </div>
        </div>

        <div className='relative h-36 mb-6 overflow-hidden'>
          <h3 className='font-raleway font-bold text-xl 2xs:text-2xl mb-2 2xs:mb-3'>
            <span aria-hidden='true'>About</span>
            <span className='inline-block fixed left-[-9999px]'>
              {`${restaurantData.name} restaurant description`}
            </span>
          </h3>

          <p>
            <span aria-hidden='true'>
              {wordsTruncate(restaurantData.description, 12)}
            </span>

            <span className='inline-block fixed left-[-9999px]'>
              {`${
                restaurantData.name
              } restaurant description text, ${wordsTruncate(
                restaurantData.description,
                12
              )}`}
            </span>
          </p>
        </div>

        <div>
          <Link href={`/detail/${restaurantData.id}`} passHref>
            <SecondaryLink>
              <span aria-hidden='true'>Explore more</span>
              <span className='inline-block fixed left-[-9999px]'>{`Explore more about ${restaurantData.name} restaurant`}</span>
            </SecondaryLink>
          </Link>
        </div>
      </div>
    </article>
  );
}
