import { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import { useRestaurantIdb } from '../../scripts/libs/restaurantIdbHook';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

export default function DetailFavButton({ restaurantDetailData }) {
  const [favoriteRestaurant, setFavoriteRestaurant] = useState(false);
  const { getIdRestaurantIdb, putIdRestaurantIdb, delIdRestaurantIdb } =
    useRestaurantIdb();

  const favoriteStatusHandler = useCallback(async () => {
    const isFavorite = await getIdRestaurantIdb(restaurantDetailData.id);

    if (isFavorite) setFavoriteRestaurant(true);
    else setFavoriteRestaurant(false);
  }, [getIdRestaurantIdb, restaurantDetailData.id]);

  const favoriteIdbHandler = async () => {
    const isFavorite = await getIdRestaurantIdb(restaurantDetailData.id);

    if (isFavorite) {
      await delIdRestaurantIdb(restaurantDetailData.id);
    } else {
      const restaurantData = {
        id: restaurantDetailData.id,
        name: restaurantDetailData.name,
        city: restaurantDetailData.city,
        description: restaurantDetailData.description,
        pictureId: restaurantDetailData.pictureId,
        rating: restaurantDetailData.rating,
      };

      await putIdRestaurantIdb(restaurantData);
    }

    await favoriteStatusHandler();
  };

  useEffect(() => {
    favoriteStatusHandler();
  }, [favoriteStatusHandler]);

  return (
    <button
      type='button'
      className={cn(
        'flex justify-center items-center gap-2 px-3 py-2 min-h-[48px] rounded-md transition-colors duration-300',
        {
          'border-2 border-slate-700 text-slate-700': !favoriteRestaurant,
        },
        {
          'bg-slate-800 shadow shadow-slate-800/30 text-slate-100':
            favoriteRestaurant,
        }
      )}
      onClick={favoriteIdbHandler}
      aria-atomic='true'
      aria-live='assertive'
    >
      <span className='inline-block' aria-hidden='true'>
        {favoriteRestaurant ? (
          <MinusIcon className='h-5 w-5' aria-hidden='true' />
        ) : (
          <PlusIcon className='h-5 w-5' aria-hidden='true' />
        )}
      </span>

      <span className='inline-block' aria-hidden='true'>
        {favoriteRestaurant ? 'Remove from favorite' : 'Add to favorite'}
      </span>

      <span className='inline-block fixed left-[-9999px]'>
        {favoriteRestaurant
          ? `Remove ${restaurantDetailData.name} restaurant from favorite page.`
          : `Add ${restaurantDetailData.name} restaurant to favorite page.`}
      </span>
    </button>
  );
}
