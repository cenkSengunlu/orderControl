import React, {useState, useContext} from 'react';
import ProductDesignContext from '../context/ProductDesignContext';
import {useFormContext} from 'react-hook-form';

function Pricing({pricingId}) {
  const {register, formState: {errors}} = useFormContext({mode:'onBlur',});
  const {productDesignEvent} = useContext(ProductDesignContext);
  const [price, setPrice] = useState(0);


  const handleSetPrice = (e) => {
    setPrice(e.target.value);
  }
  return (
    <>
      <div className='flex flex-col items-start justify-center w-16'>
        <input {...register (`${pricingId}-totalNumber`, {required: 'Toplam Adet Giriniz!'})} className='rounded text-black py-0.5 w-16 h-11 px-2' min='0' type="number"/>
        <p className='text-red-500 font-semibold text-sm mt-1 text-center'>{errors[`${pricingId}-totalNumber`]?.message}</p>
      </div>

      <div>
        <select className='w-20 px-1 h-11 py-3' {...register(`${pricingId}-unitSize`, {required: 'Ölçü Seçiniz!'})}>
          <option value="">Ölçü Yok</option>
          <option value={'Ölçü 1'}>Ölçü 1</option>
          <option value={'Ölçü 2'}>Ölçü 2</option>
          <option value={'Ölçü 3'}>Ölçü 3</option>
        </select>
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors[`${pricingId}-unitSize`]?.message}</p>
      </div>

      <div className='flex flex-col items-start justify-center w-16'>
        <input {...register (`${pricingId}-price`, {required: 'Fiyat Giriniz!', onChange: (e) => handleSetPrice(e) })} className='rounded text-black py-0.5 w-16 h-11 px-2' min='0' type="number"/>
        <p className='text-red-500 font-semibold text-sm mt-1 text-center'>{errors[`${pricingId}-price`]?.message}</p>
      </div>

      <div>
        <select className='w-20 px-1 h-11 py-3' {...register(`${pricingId}-curreneyUnit`, {required: 'Para Seçiniz!'})}>
          <option value="">Para Yok</option>
          <option value={'Para 1'}>Para 1</option>
          <option value={'Para 2'}>Para 2</option>
          <option value={'Para 3'}>Para 3</option>
        </select>
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors[`${pricingId}-curreneyUnit`]?.message}</p>
      </div>

      {/* <div className='rounded text-black py-0.5 w-16 h-11 px-2 bg-white'>
        empty
      </div> */}
      <div>
        <input {...register (`${pricingId}-totalPrice`, {required: 'Toplam Adet Giriniz!'})} className='rounded text-black py-0.5 w-16 h-11 px-2'
          defaultValue={
            (productDesignEvent && productDesignEvent[pricingId - 1] && price) ? productDesignEvent[pricingId - 1].reduce((total, val) => total + parseInt(val.amount), 0) * price : ''
          } type="text" />
      </div>
      
    </>
  )
}

export default Pricing;