import Head from 'next/head';
import cn from 'classnames';
import { useRestaurantLists } from '../../scripts/libs/restaurantDataHook';
import { useRestaurantFilter } from '../../scripts/libs/restaurantFilterHook';
import generateIds from '../../scripts/libs/generateIds';
import NavApp from '../../components/NavApp';
import FilterRestaurant from '../../components/FilterRestaurant';
import RestaurantCard from '../../components/RestaurantCard';
import RestaurantCardLoad from '../../components/RestaurantCardLoad';
import PrimaryButton from '../../components/PrimaryButton';
import PrimaryLink from '../../components/PrimaryLink';
import FooterApp from '../../components/FooterApp';

export default function Explore() {
  const {
    totalRestaurantLists,
    restaurantPartialLists,
    totalRestaurantPartialLists,
    addRestaurantPartialLists,
  } = useRestaurantLists(6);

  const {
    searchValue,
    setSearchValue,
    sortByValue,
    setSortByValue,
    sortAsValue,
    setSortAsValue,
    filterRestaurantData,
  } = useRestaurantFilter();

  const totalFilteredRestaurant = filterRestaurantData(
    restaurantPartialLists
  ).length;

  const searchValueHandler = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
  };

  const loadMoreHandler = () => {
    setSearchValue('');
    addRestaurantPartialLists(6);
  };

  return (
    <div className='ExplorePage'>
      <Head>
        <title>Explore Restaurant | RestoFerence</title>
      </Head>

      <div className='A11ySection'>
        <PrimaryLink
          href='#HeaderBanner'
          className='fixed left-[-9999px] p-4 focus:top-4 focus:left-4'
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
                    Explore Restaurant
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
                  filteredDataLength={totalFilteredRestaurant}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className='mb-8 md:mb-12'>
        <article className='ExploreSection'>
          <div className='container mx-auto px-4 pt-8 md:pt-10'>
            <div className='max-w-6xl mx-auto'>
              <p className='bg-gradient-to-br from-orange-100 to bg-yellow-100 shadow shadow-orange-200/40 font-semibold text-center text-slate-800 p-4 mb-8 rounded-md md:max-w-max'>
                Total restaurants: {totalFilteredRestaurant}
              </p>

              {searchValue && (
                <div
                  className={cn(
                    'flex justify-center items-center pt-36 mb-44 min-h-[320px]',
                    {
                      hidden: totalFilteredRestaurant !== 0,
                    }
                  )}
                >
                  <p className='bg-slate-300 shadow text-slate-800 text-center px-4 py-1 rounded-md max-w-max mx-auto'>
                    We&apos;re sorry,{' '}
                    <span className='font-bold'>{searchValue}</span> restaurant
                    is not available.
                  </p>
                </div>
              )}

              <div
                className={cn(
                  'grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 gap-y-8 mb-8 md:mb-12',
                  {
                    'min-h-[3078px] 2xs:min-h-[3252px] md:min-h-[1732px] lg:min-h-[1152px]':
                      !searchValue,
                  },
                  { hidden: searchValue && totalFilteredRestaurant === 0 }
                )}
              >
                {restaurantPartialLists
                  ? filterRestaurantData(restaurantPartialLists).map(
                      (restaurantData) => (
                        <RestaurantCard
                          key={restaurantData.id}
                          restaurantData={restaurantData}
                        />
                      )
                    )
                  : generateIds(6).map((id) => (
                      <RestaurantCardLoad key={id.id} />
                    ))}
              </div>

              <div className='text-center'>
                <PrimaryButton
                  onClick={loadMoreHandler}
                  disabled={
                    totalRestaurantPartialLists === totalRestaurantLists
                  }
                >
                  <span aria-hidden='true'>Load more (+6)</span>
                  <span className='inline-block fixed left-[-9999px]'>
                    {totalRestaurantPartialLists === totalRestaurantLists
                      ? 'Cannot load more six restaurant data. Total restaurant data has reach maximum number.'
                      : 'Load more six restaurant data'}
                  </span>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </article>
      </main>

      <FooterApp />
    </div>
  );
}
