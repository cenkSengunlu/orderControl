import React from 'react';
import {useFormContext} from 'react-hook-form';


function ContentHeightWidth({productId, index}) {
  const {register, formState: {errors}} = useFormContext({mode:'onBlur',});
  return (
    <div className='flex flex-col w-fit h-18'>
      <div>
        <div className='flex mt-2 items-center justify-between'>
          <div className='font-medium text-sm mr-2'>BOY:</div>
          <input {...register (`${productId}-${index}-contentHeight`, {required: 'Boy Giriniz!'})} className='rounded text-black py-0.5 px-2 text-sm w-16' min='0' type="number" placeholder="Cm"/>
        </div>
        <p className='text-red-500 font-semibold text-sm px-1'>{errors[`${productId}-${index}-contentHeight`]?.message}</p>
        
      </div>
      <div>
        <div className='flex mt-2 items-center justify-between'>
          <div className='font-medium text-sm mr-2'>EN:</div>
          <input {...register (`${productId}-${index}-contentWidth`, {required: 'En Giriniz!'})} className='rounded text-black py-0.5 px-2 text-sm w-16' min='0' type="number" placeholder="Cm"/>
        </div>
        <p className='text-red-500 font-semibold text-sm px-1'>{errors[`${productId}-${index}-contentWidth`]?.message}</p>
      </div>
    </div>
  )
}

export default ContentHeightWidth;