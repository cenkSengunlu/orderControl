import React from 'react';
import justNumber from '../justNumber';
import justText from '../justText';

function ProductDesignItems({index, sub_index, register, remove, update, errors, watchAllFields}) {
  return (
    <>
      { 
        <>
          <div className='flex justify-center items-center h-11'>
            <button
              className="cursor-pointer h-fit text-white border-2 rounded-full border-red-600 bg-red-500 flex justify-center items-center select-none w-fit px-2.5 text-lg font-semibold"
              type="button"
              onClick={() => remove(sub_index)}
            >
              -
            </button>
          </div>
          
          <div>
            <input type="text" list="designGroupsData" className='w-36 px-3 h-11 py-3' {...register(`products[${index}].productDesignItems[${sub_index}].designGroups`, {required: 'Grup Seçiniz!' })} placeholder='Grup Yok'  onKeyPress={(event) => justText(event)}/>
            <datalist id="designGroupsData">
                <option value={'Grup Bir'}>Grup Bir</option>
                <option value={'Grup İki'}>Grup İki</option>
                <option value={'Grup Üç'}>Grup Üç</option>
            </datalist>
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.productDesignItems?.[sub_index]?.designGroups?.message}</p>
          </div>

          <div>
            <input type="text" list="designPatternsData" className='w-36 px-3 h-11 py-3' {...register(`products[${index}].productDesignItems[${sub_index}].designPatterns`, {required: 'Desen Seçiniz!'})} placeholder='Desen Yok'  onKeyPress={(event) => justText(event)}/>
            <datalist id="designPatternsData">
              <option value={'Desen Bir'}>Desen Bir</option>
              <option value={'Desen İki'}>Desen İki</option>
              <option value={'Desen Üç'}>Desen Üç</option>
            </datalist>
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.productDesignItems?.[sub_index]?.designPatterns?.message}</p>
          </div>

          <div>
            <input type="text" list="designColorsData" className='w-36 px-3 h-11 py-3' {...register(`products[${index}].productDesignItems[${sub_index}].designColors`, {required: 'Renk Seçiniz!'})} placeholder='Renk Yok' onKeyPress={(event) => justText(event)} />
            <datalist id="designColorsData">
              <option value={'Renk Bir'}>Renk Bir</option>
              <option value={'Renk İki'}>Renk İki</option>
              <option value={'Renk Üç'}>Renk Üç</option>
            </datalist>
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