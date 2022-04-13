import { useState } from 'react';
import useSWR from 'swr';
import API_ENDPOINT from '../globals/API_ENDPOINT';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useRestaurantLists = (initialTotalLists = 6) => {
  const { data, error } = useSWR(API_ENDPOINT.LISTS, fetcher);
  const [totalPartialLists, setTotalPartialLists] = useState(initialTotalLists);

  return {
    restaurantLists: data?.restaurants,
    totalRestaurantLists: data?.count,
    restaurantPartialLists: data?.restaurants.slice(0, totalPartialLists),
    totalRestaurantPartialLists: totalPartialLists,
    addRestaurantPartialLists: (addNumber) => {
      const totalAddedPartial = addNumber + totalPartialLists;
      if (totalAddedPartial >= data?.count)
        return setTotalPartialLists(data?.count);
      if (totalAddedPartial === data?.count) return;
      return setTotalPartialLists((prevValue) => prevValue + addNumber);
    },
    isLoading: !data && !error,
    isError: error,
  };
};

const useRestaurantDetail = (restaurantId) => {
  const { data, error } = useSWR(
    restaurantId ? API_ENDPOINT.DETAIL(restaurantId) : null,
    fetcher,
    { refreshInterval: 1000 }
  );

  return {
    restaurantDetailData: data?.restaurant,
    restaurantDetailError: data?.error,
    isLoading: !data && !error,
    isError: error,
  };
};

export { useRestaurantLists, useRestaurantDetail };
