import React from 'react';
import justNumber from '../justNumber';
// import justText from '../justText';
import SearchableDropdown from './SearchableDropdown';

function ProductDesignItems({index, sub_index, register, remove, setError, append, trigger, errors, watchAllFields, control}) {
  const designGroupsDataOptions = [
    { value: "Grup Bir", label: "Grup Bir" },
    { value: "Grup İki", label: "Grup İki" },
    { value: "Grup Üç", label: "Grup Üç" }
  ];

  const designPatternsDataOptions = [
    { value: "Desen Bir", label: "Desen Bir" },
    { value: "Desen İki", label: "Desen İki" },
    { value: "Desen Üç", label: "Desen Üç" }
  ];

  const designColorsDataOptions = [
    { value: "Renk Bir", label: "Renk Bir" },
    { value: "Renk İki", label: "Renk İki" },
    { value: "Renk Üç", label: "Renk Üç" }
  ];

  return (
    <>
      { 
        <>
          <div className='flex justify-center items-center h-11'>
            <button
              className="cursor-pointer h-fit text-white border-2 rounded-full border-red-600 bg-red-500 flex justify-center items-center select-none w-fit px-2.5 text-lg font-semibold"
              type="button"
              
              onClick={() => {
                remove(sub_index);
              }}
            >
              -
            </button>
          </div>
          
          <div>
            <SearchableDropdown 
              register={register} 
              control={control} 
              options={designGroupsDataOptions} 
              inputName={`products[${index}].productDesignItems[${sub_index}].designGroups`} 
              errorMessage='Grup Seçiniz!' 
              placeholder='Grup Yok'
            />
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.productDesignItems?.[sub_index]?.designGroups?.message}</p>
          </div>

          <div>
            <SearchableDropdown 
              register={register} 
              control={control} 
              options={designPatternsDataOptions} 
              inputName={`products[${index}].productDesignItems[${sub_index}].designPatterns`} 
              errorMessage='Desen Seçiniz!' placeholder='Desen Yok' 
            />
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.productDesignItems?.[sub_index]?.designPatterns?.message}</p>
          </div>

          <div>
            <SearchableDropdown 
              register={register} 
              control={control} 
              options={designColorsDataOptions} 
              inputName={`products[${index}].productDesignItems[${sub_index}].designColors`} 
              errorMessage='Renk Seçiniz!' placeholder='Renk Yok' 
            />
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.productDesignItems?.[sub_index]?.designColors?.message}</p>
          </div>
          

          <div className='flex flex-col items-start ml-1'>
            <input {...register (`products[${index}].productDesignItems[${sub_index}].amount`, {required: 'Miktar Giriniz', min:{value: 1, message: "Miktar 0'dan büyük olmalı"}})} className='rounded text-black py-0.5 w-16 h-11 px-2' min='0' type="number" onKeyDown={(event) => {justNumber(event)}}/>
            <p className='text-red-500 font-semibold text-sm mt-1 w-24'>{errors.products?.[index]?.productDesignItems?.[sub_index]?.amount?.message}</p>
          
          </div>
        </>
      }
    </>
  )
}

export default ProductDesignItems;