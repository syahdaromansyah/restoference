import { Listbox } from '@headlessui/react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/solid';
import cn from 'classnames';

export default function ListOption({
  listOptionLabel = 'My Label',
  options = [
    {
      value: 'option1',
      textContent: 'Option 1',
      isDisabled: false,
    },
    {
      value: 'option2',
      textContent: 'Option 2',
      isDisabled: false,
    },
  ],
  optionValue = {
    value: 'option1',
    textContent: 'Option 1',
    isDisabled: false,
  },
  optionHandler = () => {},
  isDisabled = false,
}) {
  return (
    <div className='ListOption'>
      <Listbox
        value={optionValue}
        onChange={optionHandler}
        disabled={isDisabled}
      >
        <Listbox.Label className='block max-w-max mb-2'>
          {listOptionLabel}
        </Listbox.Label>

        <Listbox.Button
          className={({ open, disabled }) =>
            cn(
              'bg-slate-800 shadow shadow-slate-800/30 flex justify-between items-center gap-2 p-3 rounded-md mb-1 w-full transition-colors duration-300',
              {
                'bg-slate-900': open,
              },
              {
                'text-slate-600': disabled,
              },
              { 'text-slate-100': !disabled }
            )
          }
        >
          {({ open }) => (
            <>
              <span>{optionValue?.textContent}</span>
              <span>
                <ChevronDownIcon
                  className={cn('h-6 w-6 transition-transform duration-300', {
                    '-rotate-180': open,
                  })}
                  aria-hidden='true'
                />
              </span>
            </>
          )}
        </Listbox.Button>

        <div className='relative'>
          <Listbox.Options className='bg-slate-800 shadow shadow-slate-800/30 p-1 max-w-max rounded-md absolute top-0 left-0 z-50 overflow-hidden'>
            {options?.map((option) => {
              return (
                <Listbox.Option
                  key={option?.value}
                  value={option}
                  disabled={option?.isDisabled}
                  className={({ active, disabled }) =>
                    cn(
                      'flex justify-between items-center gap-2 p-2 rounded-md min-w-[100px] select-none',
                      { 'bg-slate-700': active },
                      { 'bg-transparent': disabled }
                    )
                  }
                >
                  {({ selected, disabled }) => (
                    <>
                      <span
                        className={cn(
                          'inline-block',
                          { 'text-slate-100': !disabled },
                          { 'text-slate-600': disabled }
                        )}
                      >
                        <span aria-hidden>{option?.textContent}</span>
                        <span className='fixed left-[-9999px]'>
                          {option?.a11yTextContent}
                        </span>
                      </span>

                      <span className='inline-block'>
                        <CheckIcon
                          aria-hidden='true'
                          className={cn(
                            'h-5 w-5',
                            {
                              'text-slate-100': selected,
                            },
                            {
                              'text-transparent': disabled || !selected,
                            }
                          )}
                        />
                      </span>
                    </>
                  )}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
