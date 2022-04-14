import { useState } from 'react';
import useSWR from 'swr';
import API_ENDPOINT from '../globals/API_ENDPOINT';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useRestaurantList = (initialTotalList = 6) => {
  const { data, error } = useSWR(API_ENDPOINT.LISTS, fetcher);
  const [totalPartialList, setTotalPartialList] = useState(initialTotalList);

  return {
    restaurantList: data?.restaurants,
    totalRestaurantList: data?.count,
    restaurantPartialList: data?.restaurants.slice(0, totalPartialList),
    totalRestaurantPartialList: totalPartialList,
    addRestaurantPartialList: (addNumber) => {
      const totalAddedPartial = addNumber + totalPartialList;
      if (totalAddedPartial >= data?.count)
        return setTotalPartialList(data?.count);
      if (totalAddedPartial === data?.count) return;
      return setTotalPartialList((prevValue) => prevValue + addNumber);
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

export { useRestaurantList, useRestaurantDetail };
