const SORT_OPTION = {
  sortByOption: [
    {
      value: '',
      textContent: 'Select',
      a11yTextContent: 'Select',
      isDisabled: true,
    },
    {
      value: 'name',
      textContent: 'Name',
      a11yTextContent: 'Name',
      isDisabled: false,
    },
    {
      value: 'rating',
      textContent: 'Rating',
      a11yTextContent: 'Rating',
      isDisabled: false,
    },
  ],
  sortAsOption: {
    name: [
      {
        value: 'ascending',
        textContent: 'A-Z',
        a11yTextContent: 'Ascending',
        isDisabled: false,
      },
      {
        value: 'descending',
        textContent: 'Z-A',
        a11yTextContent: 'Descending',
        isDisabled: false,
      },
    ],
    rating: [
      {
        value: 'highest',
        textContent: 'Highest',
        a11yTextContent: 'Highest',
        isDisabled: false,
      },
      {
        value: 'lowest',
        textContent: 'Lowest',
        a11yTextContent: 'Lowest',
        isDisabled: false,
      },
    ],
  },
};

export default SORT_OPTION;
