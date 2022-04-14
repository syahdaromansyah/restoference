import { useState, useEffect } from 'react';
import Head from 'next/head';
import cn from 'classnames';
import generateIds from '../../scripts/libs/generateIds';
import useRestaurantIdb from '../../scripts/libs/useRestaurantIdb';
import useRestaurantFilter from '../../scripts/libs/useRestaurantFilter';
import PrimaryLink from '../../components/PrimaryLink';
import NavApp from '../../components/NavApp';
import FilterRestaurant from '../../components/FilterRestaurant';
import FooterApp from '../../components/FooterApp';
import RestaurantCardLoad from '../../components/RestaurantCardLoad';
import RestaurantCard from '../../components/RestaurantCard';

export default function Favorite() {
  const { getAllRestaurantIdb } = useRestaurantIdb();
  const [restaurantDataIdb, setRestaurantDataIdb] = useState([]);
  const [doneIdb, setDoneIdb] = useState(false);

  const {
    searchValue,
    setSearchValue,
    sortByValue,
    setSortByValue,
    sortAsValue,
    setSortAsValue,
    filterRestaurantData,
  } = useRestaurantFilter();

  const totalRestaurantDataIdb = restaurantDataIdb.length;
  const totalFilterRestaurantData =
    filterRestaurantData(restaurantDataIdb).length;

  const searchValueHandler = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
  };

  useEffect(() => {
    (async () => {
      const allRestaurantIdb = await getAllRestaurantIdb();
      setRestaurantDataIdb(allRestaurantIdb);
      setDoneIdb(true);
    })();
  }, [getAllRestaurantIdb]);

  return (
    <div className='FavoritePage'>
      <Head>
        <title>Favorite Restaurant | RestoFerence</title>
      </Head>

      <div className='A11ySection'>
        <PrimaryLink
          href='#HeaderBanner'
          className='fixed top-[-9999px] left-[-9999px] p-4 focus:top-4 focus:left-4'
        >
          Skip to content
        </PrimaryLink>
      </div>

      <header className='HeaderSection bg-gradient-to-br from-orange-100 to-yellow-100'>
        <div className='container mx-auto px-8 pt-4 lg:pt-6 xl:pt-8 pb-16 xl:pb-24'>
          <div className='max-w-6xl mx-auto'>
            <div className='mb-16 md:mb-20 xl:mb-24'>
              <NavApp />
            </div>

            <div id='HeaderBanner' className='HeaderBanner'>
              <div className='text-center'>
                <div className='mb-6 lg:mb-8'>
                  <h1 className='font-raleway font-bold text-2xl 2xs:text-3xl md:text-4xl lg:text-6xl mb-2 lg:mb-4'>
                    Favorite Restaurant
                  </h1>

                  <p className='text-lg'>
                    Find and explore more your restaurant destination.
                  </p>
                </div>

                <FilterRestaurant
                  searchValue={searchValue}
                  searchValueHandler={searchValueHandler}
                  sortByValue={sortByValue}
                  setSortByValue={setSortByValue}
                  sortAsValue={sortAsValue}
                  setSortAsValue={setSortAsValue}
                  filteredDataLength={
                    filterRestaurantData(restaurantDataIdb).length
                  }
                  disabled={totalRestaurantDataIdb === 0}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className='mb-8 md:mb-12'>
        <article className='FavoriteSection'>
          <div className='container mx-auto px-4 pt-8 md:pt-10'>
            <div className='max-w-6xl mx-auto'>
              <p className='bg-gradient-to-br from-orange-100 to bg-yellow-100 shadow shadow-orange-200/40 font-semibold text-center text-slate-800 p-4 mb-8 rounded-md md:max-w-max'>
                Total restaurants: {totalFilterRestaurantData}
              </p>

              {doneIdb && totalRestaurantDataIdb === 0 && (
                <div className='flex justify-center items-center h-[468px] md:h-[640px]'>
                  <p className='bg-slate-300 shadow text-slate-800 text-center px-4 py-1 rounded-md max-w-max mx-auto'>
                    Oops! You don&apos;t have any favorite restaurant yet.
                  </p>
                </div>
              )}

              {searchValue &&
                totalFilterRestaurantData === 0 &&
                totalRestaurantDataIdb > 0 && (
                  <div className='flex justify-center items-center h-[468px] md:h-[640px]'>
                    <p className='bg-slate-300 shadow text-slate-800 text-center px-4 py-1 rounded-md max-w-max mx-auto'>
                      We&apos;re sorry,{' '}
                      <span className='font-bold'>{searchValue}</span>{' '}
                      restaurant is not available.
                    </p>
                  </div>
                )}

              {!doneIdb && (
                <div
                  className={cn(
                    'grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 gap-y-8 mb-8 md:mb-12'
                  )}
                >
                  {generateIds(3).map((id) => (
                    <RestaurantCardLoad key={id.id} />
                  ))}
                </div>
              )}

              {doneIdb && totalFilterRestaurantData > 0 && (
                <div
                  className={cn(
                    'grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 gap-y-8 mb-8 md:mb-12'
                  )}
                >
                  {filterRestaurantData(restaurantDataIdb).map(
                    (restaurantData) => (
                      <RestaurantCard
                        key={restaurantData.id}
                        restaurantData={restaurantData}
                      />
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </article>
      </main>

      {doneIdb && <FooterApp />}
    </div>
  );
}
