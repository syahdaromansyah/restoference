import { useCallback } from 'react';
import { openDB } from 'idb';

const useRestaurantIdb = () => {
  const openRestaurantIdb = useCallback(
    () =>
      openDB('restaurant-idb', 1, {
        upgrade(db) {
          if (db.objectStoreNames.contains('restaurant-data')) return;
          db.createObjectStore('restaurant-data', { keyPath: 'id' });
        },
      }),
    []
  );

  const createRestaurantIdbTx = useCallback(
    async (mode = 'readonly') => {
      const restaurantIdbTx = (await openRestaurantIdb()).transaction(
        'restaurant-data',
        mode
      );
      return restaurantIdbTx.objectStore('restaurant-data');
    },
    [openRestaurantIdb]
  );

  const getIdRestaurantIdb = useCallback(
    async (restaurantId) =>
      await (await createRestaurantIdbTx()).get(restaurantId),
    [createRestaurantIdbTx]
  );

  const getAllRestaurantIdb = useCallback(
    async () => await (await createRestaurantIdbTx()).getAll(),
    [createRestaurantIdbTx]
  );

  const putIdRestaurantIdb = useCallback(
    async (restaurantData) =>
      await (await createRestaurantIdbTx('readwrite')).put(restaurantData),
    [createRestaurantIdbTx]
  );

  const delIdRestaurantIdb = useCallback(
    async (restaurantId) =>
      await (await createRestaurantIdbTx('readwrite')).delete(restaurantId),
    [createRestaurantIdbTx]
  );

  const clearRestaurantIdb = async () =>
    await (await createRestaurantIdbTx('readwrite')).clear();

  return {
    getIdRestaurantIdb,
    getAllRestaurantIdb,
    putIdRestaurantIdb,
    delIdRestaurantIdb,
    clearRestaurantIdb,
  };
};

export { useRestaurantIdb };
