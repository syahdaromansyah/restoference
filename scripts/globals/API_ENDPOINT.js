import CONFIG from './CONFIG';

const API_ENDPOINT = {
  LISTS: `${CONFIG.BASE_API}list`,
  DETAIL: (restaurantId) => `${CONFIG.BASE_API}detail/${restaurantId}`,
  REVIEW: `${CONFIG.BASE_API}review`,
};

export default API_ENDPOINT;
