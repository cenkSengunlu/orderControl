import React, {useContext} from 'react';
import ProductDesignContext from '../context/ProductDesignContext';
import {useFormContext} from 'react-hook-form';

function ProductDesignItems({itemId, itemIndex}) {
  const {productDesign, setProductDesign} = useContext(ProductDesignContext);
  const {register, unregister, formState: {errors}} = useFormContext({mode:'onBlur',});

  const deleteClick = (delId, delIndex) => {
    unregister([`${delId}-groups`, `${delId}-amount`, `${delId}-colors`, `${delId}-patterns`]);
    const list = [...productDesign];
    list.splice(delIndex, 1);
    setProductDesign(list);
  }

  const handleSetValue = (event, id, keyName) => {
    const list = [...productDesign];
    let item = list[id];
    item[keyName] = event.target.value;
    
    list[id] = item;
    setProductDesign(list);
  }

  return (
    <>
      {itemId &&
        <>
          <div className='flex justify-center items-center h-11'>
            <div className='cursor-pointer h-fit text-white border-2 rounded-full border-red-600 bg-red-500 flex justify-center items-center select-none w-fit px-2.5 text-lg font-semibold' onClick={() => deleteClick(itemId, itemIndex)}>-</div>
          </div>

          <div>
            <select className='w-36 px-3 h-11 py-3' {...register(`${itemId}-groups`, {required: 'Grup Seçiniz!', onChange: (e) => handleSetValue(e, itemId - 1, 'groups') })}>
              <option value="">Grup Yok</option>
              <option value={'Grup 1'}>Grup 1</option>
              <option value={'Grup 2'}>Grup 2</option>
              <option value={'Grup 3'}>Grup 3</option>
            </select>
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors[`${itemId}-groups`]?.message}</p>
          </div>

          <div>
            <select className='w-36 px-3 h-11 py-3' {...register(`${itemId}-patterns`, {required: 'Desen Seçiniz!', onChange: (e) => handleSetValue(e, itemId - 1, 'patterns')})}>
              <option value="">Desen Seç</option>
              <option value={'Desen 1'}>Desen 1</option>
              <option value={'Desen 2'}>Desen 2</option>
              <option value={'Desen 3'}>Desen 3</option>
            </select>
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors[`${itemId}-patterns`]?.message}</p>
          </div>

          <div>
            <select className='w-36 px-3 h-11 py-3' {...register(`${itemId}-colors`, {required: 'Renk Seçiniz!', onChange: (e) => handleSetValue(e, itemId - 1, 'colors')})}>
              <option value="">Renk Yok</option>
              <option value={'Renk 1'}>Renk 1</option>
              <option value={'Renk 2'}>Renk 2</option>
              <option value={'Renk 3'}>Renk 3</option>
            </select>
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors[`${itemId}-colors`]?.message}</p>
          </div>

          <div className='flex flex-col items-start ml-1'>
            <input {...register (`${itemId}-amount`, {required: 'Miktar Giriniz!', onChange: (e) => handleSetValue(e, itemId - 1, 'amount')})} className='rounded text-black py-0.5 w-16 h-11 px-2' type="text"/>
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors[`${itemId}-amount`]?.message}</p>
          </div>
        </>
      }
    </>
  )
}

export default ProductDesignItems;