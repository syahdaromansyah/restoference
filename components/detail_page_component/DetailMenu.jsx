export default function DetailMenu({ restaurantDetailData }) {
  return (
    <>
      <h2 className='font-raleway font-bold text-xl md:text-2xl mb-2 md:mb-4'>
        <span aria-hidden='true'>Menu</span>
        <span className='inline-block fixed left-[-9999px]'>
          {`${restaurantDetailData.name} restaurant menu`}
        </span>
      </h2>

      <div className='grid grid-cols-2 mb-6'>
        <div>
          <h3 className='border-l-4 border-slate-800 font-raleway font-bold text-xl pl-2 mb-2'>
            <span aria-hidden='true'>Drinks</span>
            <span className='inline-block fixed left-[-9999px]'>
              {`${restaurantDetailData.name} restaurant menu drinks`}
            </span>
          </h3>

          <ul className='list-disc list-inside'>
            {restaurantDetailData.menus.drinks.map((drink) => (
              <li key={drink.name}>{drink.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='border-l-4 border-slate-800 font-raleway font-bold text-xl pl-2 mb-2'>
            <span aria-hidden='true'>Foods</span>
            <span className='inline-block fixed left-[-9999px]'>
              {`${restaurantDetailData.name} restaurant menu foods`}
            </span>
          </h3>

          <ul className='list-disc list-inside'>
            {restaurantDetailData.menus.foods.map((food) => (
              <li key={food.name}>{food.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
