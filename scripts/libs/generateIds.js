const generateIds = (numberId) => {
  const ids = [];
  for (let i = 0; i < numberId; ++i) {
    ids.push({ id: i });
  }
  return ids;
};

export default generateIds;
