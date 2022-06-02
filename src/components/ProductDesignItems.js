import React, {useContext} from 'react';
import ProductDesignContext from '../context/ProductDesignContext';
import {useFormContext} from 'react-hook-form';

function ProductDesignItems({productDesignItem, productDesignId, itemId, itemIndex}) {
  const {productDesignEvent, setProductDesignEvent} = useContext(ProductDesignContext);
  const {register, unregister, formState: {errors}} = useFormContext({mode:'onBlur',});

  const deleteClick = (delId, delIndex) => {
    unregister([`${delId}-groups`, `${delId}-amount`, `${delId}-colors`, `${delId}-patterns`]);
    const list = productDesignEvent;
    list[productDesignId - 1].splice(delIndex, 1);
    setProductDesignEvent(list);
  }
  

  // artık gerekli değil, çalışma mantığını anlayınca bu fonksiyonu sil
  const handleSetValue = (event, id, keyName) => {
    const list = productDesignEvent;
    let item = list[productDesignId - 1][id];
    item[keyName] = event.target.value;
    list[productDesignId - 1][id] = item;
    console.log(list);
    setProductDesignEvent(list);
  }

  return (
    <>
      {productDesignItem &&
        <>
          <div className='flex justify-center items-center h-11'>
            <div className='cursor-pointer h-fit text-white border-2 rounded-full border-red-600 bg-red-500 flex justify-center items-center select-none w-fit px-2.5 text-lg font-semibold' onClick={() => deleteClick(itemId, itemIndex)}>-</div>
          </div>

          <div>
            <select className='w-36 px-3 h-11 py-3' {...register(`${productDesignId}-${itemId}-groups`, {required: 'Grup Seçiniz!', onChange: (e) => handleSetValue(e, itemIndex , 'groups') })}>
              <option value="">Grup Yok</option>
              <option value={'Grup 1'}>Grup 1</option>
              <option value={'Grup 2'}>Grup 2</option>
              <option value={'Grup 3'}>Grup 3</option>
            </select>
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors[`${productDesignId}-${itemId}-groups`]?.message}</p>
          </div>

          <div>
            <select className='w-36 px-3 h-11 py-3' {...register(`${productDesignId}-${itemId}-patterns`, {required: 'Desen Seçiniz!', onChange: (e) => handleSetValue(e, itemIndex , 'patterns')})}>
              <option value="">Desen Seç</option>
              <option value={'Desen 1'}>Desen 1</option>
              <option value={'Desen 2'}>Desen 2</option>
              <option value={'Desen 3'}>Desen 3</option>
            </select>
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors[`${productDesignId}-${itemId}-patterns`]?.message}</p>
          </div>

          <div>
            <select className='w-36 px-3 h-11 py-3' {...register(`${productDesignId}-${itemId}-colors`, {required: 'Renk Seçiniz!', onChange: (e) => handleSetValue(e, itemIndex , 'colors')})}>
              <option value="">Renk Yok</option>
              <option value={'Renk 1'}>Renk 1</option>
              <option value={'Renk 2'}>Renk 2</option>
              <option value={'Renk 3'}>Renk 3</option>
            </select>
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors[`${productDesignId}-${itemId}-colors`]?.message}</p>
          </div>

          <div className='flex flex-col items-start ml-1'>
            <input {...register (`${productDesignId}-${itemId}-amount`, {required: 'Miktar Giriniz!', onChange: (e) => handleSetValue(e, itemIndex, 'amount')})} className='rounded text-black py-0.5 w-16 h-11 px-2' min='0' type="number"/>
            <p className='text-red-500 font-semibold text-sm mt-1'>{errors[`${productDesignId}-${itemId}-amount`]?.message}</p>
          </div>
        </>
      }
    </>
  )
}

export default ProductDesignItems;