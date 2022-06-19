import React, {useEffect} from 'react';
import justNumber from '../justNumber';
// import justText from '../justText';
import SearchableDropdown from './SearchableDropdown';

function Pricing({index, register, errors, setValue, watchAllFields, control}) {
  const totalNumber = watchAllFields.products[`${index}`].productDesignItems.reduce((total, val) => total + parseInt(val.amount), 0);
  const totalPrice = totalNumber && watchAllFields.products[`${index}`].pricing.price ? totalNumber * watchAllFields.products[`${index}`].pricing.price : 0;

  useEffect(() => {
    setValue(`products[${index}].pricing.totalPrice`, totalPrice);
  },[totalPrice]);

  useEffect(() => {
    setValue(`products[${index}].pricing.totalNumber`, totalNumber);
  },[totalNumber]);

  const unitSizeDataOptions = [
    { value: "Ölçü Bir", label: "Ölçü Bir" },
    { value: "Ölçü İki", label: "Ölçü İki" },
    { value: "Ölçü Üç", label: "Ölçü Üç" }
  ];

  const currencyUnitDataOptions = [
    { value: "TL", label: "TL" },
    { value: "EURO", label: "EURO" },
    { value: "DOLAR", label: "DOLAR" }
  ];


  return (
    <>
      <div className='flex flex-col items-start justify-center w-16'>
        <input {...register (`products[${index}].pricing.totalNumber`)} className='rounded text-black py-0.5 w-16 h-11 px-2' min='0' type="number"  readOnly />
      </div>

      


      <div>
        <SearchableDropdown register={register} control={control} options={unitSizeDataOptions} inputName={`products[${index}].pricing.unitSize`} errorMessage='Ölçü Seçiniz!' placeholder='Seçiniz...' />
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.pricing?.unitSize?.message}</p>
      </div>

      <div className='flex flex-col items-start justify-center w-16'>
        <input {...register (`products[${index}].pricing.price`,  {required: 'Miktar Giriniz', min:{value: 1, message: "Miktar 0'dan büyük olmalı"}})} className='rounded text-black py-0.5 w-16 h-11 px-2' min='0' type="number" onKeyDown={(event) => {justNumber(event)}}/>
        <p className='text-red-500 font-semibold text-sm mt-1 w-24'>{errors.products?.[index]?.pricing?.price?.message}</p>
      </div>

      <div>
        <div className=''>
          <SearchableDropdown 
            register={register} 
            control={control} 
            options={currencyUnitDataOptions} 
            inputName={`products[${index}].pricing.currencyUnit`} 
            errorMessage='Para Birimi Seçiniz!' 
            placeholder='Seçiniz...' 
          />
        </div>
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.pricing?.currencyUnit?.message}</p>
      </div>

      <div>
        <input {...register (`products[${index}].pricing.totalPrice`)} className='rounded text-black py-0.5 w-16 h-11 px-2' min='0' type="number" readOnly  />
      </div>
      
    </>
  )
}

export default Pricing;