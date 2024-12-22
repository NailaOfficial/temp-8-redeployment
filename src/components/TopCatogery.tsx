import React from 'react'
import Image from 'next/image';

const TopCatogery = () => {
  return (
    <div className=''>
       

        <div className='mt-16 grid grid-cols-1  place-items-center sm:flex  gap-6 justify-between'>
        
        {/* Product 01 */}
        <div className='w-[312px] h-[312px] relative'>
  <Image
    width={500}
    height={500}
    alt='Winger Chair'
    src={"/Image8.png"}
    className='w-[312px] h-[312px] object-contain z-50 cursor-pointer hover:border-2'
  />
  <div className='w-full rounded-b-md h-[85px] absolute bottom-0 bg-black bg-opacity-50 flex flex-col justify-start items-start p-2'>
    <h1 className='text-white text-[20px] font-semibold'>Wing Chair</h1>
    <p className='text-white text-[14px]'>3,584 Products</p>
  </div>
        </div>


        {/* Product 02 */}
        <div className='w-[312px] h-[312px] relative'>
  <Image
    width={500}
    height={500}
    alt='Wooden Chair'
    src={"/Image9.png"}
    className='w-[312px] h-[312px] object-contain z-50 cursor-pointer hover:border-2'
  />
  <div className='w-full rounded-b-md h-[85px] absolute bottom-0 bg-black bg-opacity-50 flex flex-col justify-start items-start p-2'>
    <h1 className='text-white text-[20px] font-semibold'>Wooden Chair</h1>
    <p className='text-white text-[14px]'>157 Products</p>
  </div>
        </div>


        {/* Product 03 */}
        <div className='w-[312px] h-[312px] relative'>
  <Image
    width={500}
    height={500}
    alt='Desk Chair'
    src={"/Image10.png"}
    className='w-[312px] h-[312px] object-contain z-50 cursor-pointer hover:border-2'
  />
  <div className='w-full rounded-b-md h-[85px] absolute bottom-0 bg-black bg-opacity-50 flex flex-col justify-start items-start p-2'>
    <h1 className='text-white text-[20px] font-semibold'>Desk Chair</h1>
    <p className='text-white text-[14px]'>154 Products</p>
  </div>
        </div>


        </div>
    </div>
  );
}

export default TopCatogery;
