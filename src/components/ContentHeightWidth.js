import React from 'react';
import justNumber from '../justNumber';

function ContentHeightWidth({index, sub_index, register, errors}) {
  return (
    <div className='flex flex-col w-fit h-18'>
      <div>
        <div className='flex mt-2 items-center justify-between'>
          <div className='font-medium text-sm mr-2'>BOY:</div>
          <input {...register (`products[${index}].content[${sub_index}].contentHeight`, {required: 'Boy Giriniz!'})} className='rounded text-black py-0.5 px-2 text-sm w-16' min='0' type="number" placeholder="Cm"/>
        </div>
        <p className='text-red-500 font-semibold text-sm'>{errors.products?.[index]?.content?.[sub_index]?.contentHeight?.message}</p>
        
      </div>
      <div>
        <div className='flex mt-2 items-center justify-between'>
          <div className='font-medium text-sm mr-2'>EN:</div>
          <input {...register (`products[${index}].content[${sub_index}].contentWidth`, {required: 'Ürün Adeti Giriniz!', min:{value: 1, message: "Ürün Adeti 0'dan büyük olmalı"}})} className='rounded text-black py-0.5 px-2 text-sm w-16' min='0' type="number" onKeyPress={(event) => justNumber(event)} placeholder="Cm"/>
        </div>
        <p className='text-red-500 font-semibold text-sm'>{errors.products?.[index]?.content?.[sub_index]?.contentWidth?.message}</p>
      </div>
    </div>
  )
}

export default ContentHeightWidth;