import { useState } from 'react';
import cn from 'classnames';
import SORT_OPTION from '../scripts/utils/SORT_OPTION';
import SearchInput from './SearchInput';
import ListOption from './ListOption';

export default function FilterRestaurant({
  searchValue,
  searchValueHandler,
  sortByValue,
  setSortByValue,
  sortAsValue,
  setSortAsValue,
  filteredDataLength,
  disabled,
}) {
  const [searchInputFocus, setSearchInputFocus] = useState(false);

  const searchInputFocusHandler = (e) => {
    const eventType = e.type;
    if (eventType === 'focus') setSearchInputFocus(true);
    else setSearchInputFocus(false);
  };

  const changeSortByOptionsHandler = (valueOption) => {
    if (valueOption.value === 'name') {
      setSortByValue(valueOption);
      setSortAsValue(SORT_OPTION.sortAsOption.name[0]);
    } else {
      setSortByValue(valueOption);
      setSortAsValue(SORT_OPTION.sortAsOption.rating[0]);
    }
  };

  return (
    <div>
      <div className='mb-2'>
        <div className='max-w-lg mx-auto'>
          <SearchInput
            value={searchValue}
            onChange={searchValueHandler}
            onBlur={searchInputFocusHandler}
            onFocus={searchInputFocusHandler}
            placeholder='Restaurant name'
            disabled={disabled}
          />
        </div>
      </div>

      <div className='mb-6'>
        <p
          className={cn(
            'bg-slate-600 shadow shadow-slate-600/30 text-sm text-slate-300 px-4 py-1 rounded-md max-w-max mx-auto transition duration-300 select-none',
            { 'opacity-0': !searchInputFocus && !searchValue }
          )}
        >
          {searchValue
            ? `Found ${filteredDataLength} restaurants`
            : 'Wait for search...'}
        </p>
      </div>

      <div className='grid grid-cols-2 gap-x-2 max-w-xs mx-auto'>
        <ListOption
          listOptionLabel='Sort By'
          options={SORT_OPTION.sortByOption}
          optionValue={sortByValue}
          optionHandler={changeSortByOptionsHandler}
          isDisabled={disabled}
        />

        <ListOption
          listOptionLabel='Sort As'
          options={
            sortByValue.value === 'name'
              ? SORT_OPTION.sortAsOption.name
              : SORT_OPTION.sortAsOption.rating
          }
          optionValue={sortAsValue}
          optionHandler={setSortAsValue}
          isDisabled={sortByValue.value === '' || disabled}
        />
      </div>
    </div>
  );
}
