import React  from 'react';
import { useFieldArray } from "react-hook-form";
import ProductDesignItems from './ProductDesignItems';
// import ProductDesignContext from '../context/ProductDesignContext';
// import ProductDesignItems from './ProductDesignItems';



function ProductDesign({index, control, register, errors, watchAllFields}) {
    const { fields, append, update, remove } = useFieldArray({
        control,
        name: `products[${index}].productDesignItems`,
        defaultValues: {
          [`products[${index}].productDesignItems`]: []
        }
      });

  return (
    <>
      <div className='grid grid-cols-5 auto-cols-fr gap-2'>
        <div className='w-36'>
          <p className='text-center text-white font-semibold'>İŞLEM</p>
        </div>
        <div className='w-36'>
          <p className='text-center text-white font-semibold'>GRUPLAR</p>
        </div>
        <div className='w-36'>
          <p className='text-center text-white font-semibold'>DESENLER</p>
        </div>
        <div className='w-36'>
          <p className='text-center text-white font-semibold'>RENKLER</p>
        </div>
        <div className='flex justify-start ml-2 w-32'>
          <p className='text-center text-white font-semibold'>MİKTAR</p>
        </div>

        {fields.map((field, sub_index) => (
          <ProductDesignItems
            control={control}
            update={update}
            index={index}
            sub_index={sub_index}
            register={register}
            remove={remove}
            errors={errors}
            watchAllFields={watchAllFields}
            key={field.id}
          />
      ))}


        {/* {productDesignEvent[productDesignId - 1] && productDesignEvent[productDesignId - 1].map((item, index) => {
            return(
              <ProductDesignItems productDesignItem={item} productDesignId={productDesignId} itemId={item.id} itemIndex={index} key={index}/>
            )
          })} */}
      </div>
      <div className='w-full flex justify-center select-none mt-3'>
        <button
          className='w-36 bg-zinc-400 border-2 border-zinc-800 flex justify-center cursor-pointer items-center rounded-full'
          type="button"
          onClick={() => {
            append({
              designGroups: '',
              designPatterns: '',
              designColors: '',
              amount: 0
            })
          }}
        >
          <div className='border-2 rounded-full px-0.5 border-zinc-800 text-white font-semibold text-lg'>+</div>
        </button>
      </div>
    </>
    
  )
}

export default ProductDesign;