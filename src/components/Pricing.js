import React from 'react';
import justNumber from '../justNumber';
import justText from '../justText';

function Pricing({index, register, errors, watchAllFields}) {
  const totalNumber = watchAllFields.products[`${index}`].productDesignItems.reduce((total, val) => total + parseInt(val.amount), 0);
  const totalPrice = totalNumber && watchAllFields.products[`${index}`].pricing.price ? totalNumber * watchAllFields.products[`${index}`].pricing.price : 0;

  return (
    <>
      <div className='flex flex-col items-start justify-center w-16'>
        <input readOnly {...register (`products[${index}].pricing.totalNumber`)} className='rounded text-black py-0.5 w-16 h-11 px-2' min='0' type="number"  value={totalNumber} />
      </div>

      


      <div>
        <input type="text" list="unitSizeData" className='w-28 px-3 h-11 py-3' {...register(`products[${index}].pricing.unitSize`, {required: 'Ölçü Seçiniz!'})} placeholder='Seçiniz...' onKeyPress={(event) => justText(event)} />
        <datalist id="unitSizeData">
          <option value={'Ölçü Bir'}>Ölçü Bir</option>
          <option value={'Ölçü İki'}>Ölçü İki</option>
          <option value={'Ölçü Üç'}>Ölçü Üç</option>
        </datalist>
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.pricing?.unitSize?.message}</p>
      </div>

      <div className='flex flex-col items-start justify-center w-16'>
        <input {...register (`products[${index}].pricing.price`,  {required: 'Miktar Giriniz', min:{value: 1, message: "Miktar 0'dan büyük olmalı"}})} className='rounded text-black py-0.5 w-16 h-11 px-2' min='0' type="number" onKeyDown={(event) => {justNumber(event)}}/>
        <p className='text-red-500 font-semibold text-sm mt-1 w-24'>{errors.products?.[index]?.pricing?.price?.message}</p>
      </div>

      <div>
        <input type="text" list="currencyUnitData" className='w-28 px-3 h-11 py-3' {...register(`products[${index}].pricing.currencyUnit`, {required: 'Para Birimi Seçiniz!'})} placeholder='Seçiniz...' onKeyPress={(event) => justText(event)} />
        <datalist id="currencyUnitData">
          <option value={'TL'}>TL</option>
          <option value={'Euro'}>Euro</option>
          <option value={'Dolar'}>Dolar</option>
        </datalist>
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.pricing?.currencyUnit?.message}</p>
      </div>

      <div>
        <input readOnly {...register (`products[${index}].pricing.totalPrice`)} className='rounded text-black py-0.5 w-16 h-11 px-2' min='0' type="number"  value={totalPrice} />
      </div>
      
    </>
  )
}

export default Pricing;