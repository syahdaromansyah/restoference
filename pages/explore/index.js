import Head from 'next/head';
import { useRestaurantLists } from '../../scripts/libs/restaurantDataHook';
import { useRestaurantFilter } from '../../scripts/libs/restaurantFilterHook';
import NavApp from '../../components/NavApp';
import FilterRestaurant from '../../components/FilterRestaurant';

export default function Explore() {
  const { restaurantPartialLists } = useRestaurantLists(6);

  const {
    searchValue,
    setSearchValue,
    sortByValue,
    setSortByValue,
    sortAsValue,
    setSortAsValue,
    filterRestaurantData,
  } = useRestaurantFilter();

  const totalRestaurantFilter = filterRestaurantData(
    restaurantPartialLists
  ).length;

  const searchValueHandler = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
  };

  return (
    <div className='ExplorePage'>
      <Head>
        <title>Explore Restaurant | RestoFerence</title>
      </Head>

      <header className='HeaderSection bg-gradient-to-br from-orange-100 to-yellow-100'>
        <div className='container mx-auto px-8 pt-4 lg:pt-6 xl:pt-8 pb-16 xl:pb-24'>
          <div className='max-w-6xl mx-auto'>
            <div className='mb-16 md:mb-20 xl:mb-24'>
              <NavApp />
            </div>

            <div className='HeaderBanner'>
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
                  filteredDataLength={totalRestaurantFilter}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
