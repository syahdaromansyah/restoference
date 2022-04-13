import { useState } from 'react';
import SORT_OPTION from '../utils/SORT_OPTION';

function useRestaurantFilter() {
  const [searchValue, setSearchValue] = useState('');
  const [sortByValue, setSortByValue] = useState(SORT_OPTION.sortByOption[0]);
  const [sortAsValue, setSortAsValue] = useState(
    SORT_OPTION.sortAsOption.name[0]
  );

  const filterRestaurantData = (restaurantData) => {
    const filteredRestaurantData =
      restaurantData?.filter((restaurant) =>
        restaurant.name
          .toLowerCase()
          .replaceAll(' ', '')
          .includes(searchValue.toLowerCase().replaceAll(' ', ''))
      ) || [];

    if (sortByValue.value === 'name') {
      return filteredRestaurantData.sort((resA, resB) => {
        const restaurantA = resA.name.toLowerCase().replaceAll(' ', '');
        const restaurantB = resB.name.toLowerCase().replaceAll(' ', '');
        if (restaurantA < restaurantB)
          return sortAsValue.value === 'ascending' ? -1 : 1;
        if (restaurantA > restaurantB)
          return sortAsValue.value === 'ascending' ? 1 : -1;
        return 0;
      });
    }

    if (sortByValue.value === 'rating') {
      return filteredRestaurantData.sort((resA, resB) => {
        return sortAsValue.value === 'lowest'
          ? resA.rating - resB.rating
          : resB.rating - resA.rating;
      });
    }

    return filteredRestaurantData;
  };

  return {
    searchValue,
    setSearchValue,
    sortByValue,
    setSortByValue,
    sortAsValue,
    setSortAsValue,
    filterRestaurantData,
  };
}

export { useRestaurantFilter };
