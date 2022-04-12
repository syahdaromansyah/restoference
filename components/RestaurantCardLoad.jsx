export default function RestaurantCardLoad() {
  return (
    <div
      className='RestaurantCard bg-slate-200 shadow-md shadow-slate-200/30 rounded-md pb-4 overflow-hidden'
      aria-hidden='true'
      role='presentation'
    >
      <div className='animate-pulse'>
        <div className='h-[160px] 2xs:h-[180px] md:h-[220px] mb-4'>
          <div className='bg-slate-300 h-full w-full'></div>
        </div>

        <div className='px-2'>
          <div className='bg-slate-300 rounded-md h-7 w-32 mb-2 2xs:mb-3'></div>

          <div className='grid grid-cols-6 h-6 mb-2'>
            <div className='bg-slate-300 col-span-3 rounded-md h-full w-full 2xs:mb-3'></div>
            <div className='bg-slate-300 col-end-7 rounded-md h-full w-full 2xs:mb-3'></div>
          </div>

          <div className='grid grid-rows-[8] gap-1 items-center h-[144px] mb-6'>
            <div className='bg-slate-300 rounded-md h-4 w-full'></div>
            <div className='bg-slate-300 rounded-md h-4 w-full'></div>
            <div className='bg-slate-300 rounded-md h-4 w-full'></div>
            <div className='bg-slate-300 rounded-md h-4 w-full'></div>
            <div className='bg-slate-300 rounded-md h-4 w-full'></div>
            <div className='bg-slate-300 rounded-md h-4 w-full'></div>
            <div className='bg-slate-300 rounded-md h-4 w-full'></div>
            <div className='bg-slate-300 rounded-md h-4 w-full'></div>
          </div>

          <div className='bg-slate-300 h-14 w-[138px] rounded-md'></div>
        </div>
      </div>
    </div>
  );
}
