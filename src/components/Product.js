import React, {useEffect} from 'react';
import { useFieldArray } from "react-hook-form";
import Selections from './Selections';
import ProductDesign from './ProductDesign';
import Content from './Content';
import Pricing from './Pricing';

function Product({ control, index, register, productRemove, submitCount, errors, setError, clearErrors, setValue, trigger, watchAllFields }) {

  const { fields, append, remove: contentRemove, update } = useFieldArray({
    control,
    name: `products[${index}].content`,
    defaultValues: {
      [`products[${index}].content`]: []
    }
  });

  useEffect(() => {
      
    if (!fields.length && submitCount > 0) {

      setError(`products[${index}].content`, { type: 'custom', message: 'İçerik Seçin!' });  
      trigger(`products[${index}].content`);
    }
  }, [fields, setError, submitCount]);

  return (
    <>
      <div className='flex grid grid-flow-col auto-cols-max gap-6 w-fit  px-4 py-3 text-gray-700 border-2 border-zinc-500 mx-3 mb-2 rounded-lg  bg-zinc-200'>
        
        <div className='flex flex-col'>
          <p className='font-semibold'>SIRA</p>
          <p className='my-4 font-semibold'>{index + 1}</p>
          <button
            className="remove w-fit bg-red-500 text-white rounded-md border-2 border-red-600 p-2 mb-2 text-sm font-medium cursor-pointer select-none"
            type="button"
            onClick={() => productRemove(index)}
          >
            SİL
          </button>
        </div>

        <div className='w-48'>
          <p className='text-center font-semibold'>SEÇİMLER</p>
          <Selections 
            index={index} 
            register={register} 
            control={control} 
            errors={errors} 
            update={update} 
            append={append} 
            fields={fields} 
            contentRemove={contentRemove}
            clearErrors={clearErrors}
          />
        </div>

        <div className=''>
          <p className='text-center font-semibold'>ÜRÜN İÇERİĞİ</p>
            <div className='w-64'>
              {
                fields.map((field, sub_index) => {
                    return (<Content
                      selectedItem={field}
                      control={control}
                      update={update}
                      index={index}
                      sub_index={sub_index}
                      register={register}
                      errors={errors}
                      key={field.id} 

                    />)
                  
                })
              }
            </div>
            <p className='text-red-500 font-semibold text-sm mt-1 text-center'>{errors?.products?.[index]?.content?.message}</p>
        </div>

        <div className=''>
          <ProductDesign 
            index={index} 
            submitCount={submitCount} 
            control={control} 
            register={register} 
            errors={errors} 
            trigger={trigger} 
            watchAllFields={watchAllFields} 
            setError={setError} 
            clearErrors={clearErrors} 
          />
        </div>

        <div className='grid grid-cols-5 gap-4 auto-cols-min h-fit flex items-start'>
          
          <div className='w-16 h-12 flex justify-center items-end'>
            <p className='text-center font-semibold'>TOPLAM ADET</p>
          </div>
          <div className='w-16 h-12 flex items-end justify-center'>
            <p className='text-center font-semibold'>BİRİM (ÖLÇÜ)</p>
          </div>
          <div className='w-16 h-12 flex items-end justify-center'>
            <p className='text-center font-semibold'>FİYAT</p>
          </div>
          <div className='w-16 h-12 flex items-end justify-center'>
            <p className='text-center font-semibold'>BİRİM (PARA)</p>
          </div>
          <div className='w-16 h-12 flex items-end justify-center'>
            <p className='text-center font-semibold'>TOPLAM</p>
          </div>
          
          <Pricing 
            index={index} 
            register={register} 
            control={control} 
            setValue={setValue} 
            errors={errors} 
            watchAllFields={watchAllFields} 
          />
        </div>
        
        
      </div>
    </>
  )
}

export default Product;