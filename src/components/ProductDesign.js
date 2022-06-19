import React, {useEffect}  from 'react';
import { useFieldArray } from "react-hook-form";
import ProductDesignItems from './ProductDesignItems';
// import ProductDesignContext from '../context/ProductDesignContext';
// import ProductDesignItems from './ProductDesignItems';



function ProductDesign({index, control, register, errors, setError, clearErrors, trigger, watchAllFields, submitCount}) {
  const { fields, append, update, remove } = useFieldArray({
      control,
      name: `products[${index}].productDesignItems`,
      defaultValues: {
        [`products[${index}].productDesignItems`]: []
      }
    });

    useEffect(() => {
      
      if (!fields.length && submitCount > 0) {

        setError(`products[${index}].productDesignItems`, { type: 'custom', message: 'Product Design Item Ekleyin!' });  
        trigger(`products[${index}].productDesignItems`);
      }
    }, [fields, setError, submitCount]);


  return (
    <>
      <div className='grid grid-cols-5 auto-cols-fr gap-2 '>
        <div className='w-36'>
          <p className='text-center text-gray-700 font-semibold'>İŞLEM</p>
        </div>
        <div className='w-36'>
          <p className='text-center text-gray-700 font-semibold'>GRUPLAR</p>
        </div>
        <div className='w-36'>
          <p className='text-center text-gray-700 font-semibold'>DESENLER</p>
        </div>
        <div className='w-36'>
          <p className='text-center text-gray-700 font-semibold'>RENKLER</p>
        </div>
        <div className='flex justify-start ml-2 w-32'>
          <p className='text-center text-gray-700 font-semibold'>MİKTAR</p>
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
            append={append}
            setError={setError}
            trigger={trigger}
          />
      ))}

      </div>
      <div className='w-full flex flex-col items-center select-none mt-3'>
        <button
          className='w-36 bg-zinc-400 border-2 border-zinc-800 flex justify-center cursor-pointer items-center rounded-full'
          type="button"
          onClick={() => {
            append({
              designGroups: '',
              designPatterns: '',
              designColors: '',
              amount: 0
            });
            if(errors?.products?.[index]?.productDesignItems?.type === 'custom'){
              clearErrors(`products[${index}].productDesignItems`);
            }
          }}
        >
          <div className='border-2 rounded-full px-0.5 border-zinc-800 text-white font-semibold text-lg'>+</div>
        </button>
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors?.products?.[index]?.productDesignItems?.message}</p>
          
      </div>
    </>
    
  )
}

export default ProductDesign;