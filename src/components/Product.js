import React from 'react';
import { useFieldArray } from "react-hook-form";
import Selections from './Selections';
import ProductDesign from './ProductDesign';
import Content from './Content';
import Pricing from './Pricing';

function Product({ control, index, register, productRemove, errors, watchAllFields }) {

  const { fields, append, remove: contentRemove, update } = useFieldArray({
    control,
    name: `products[${index}].content`,
    defaultValues: {
      [`products[${index}].content`]: []
    }
  });

  return (
    <>
      <div className='flex grid grid-flow-col auto-cols-max gap-6 w-fit bg-zinc-600 px-4 py-3'>
        <div className='text-white flex flex-col'>
          <p className='font-semibold'>SIRA</p>
          <p className='my-4'>{index + 1}</p>
          <button
            className="remove w-fit bg-red-500 rounded-md border-2 border-red-600 p-2 mb-2 text-sm font-medium cursor-pointer select-none"
            type="button"
            onClick={() => productRemove(index)}
          >
            SİL
          </button>
        </div>

        <div>
          <p className='text-center text-white font-semibold'>SEÇİMLER</p>
          <Selections index={index} register={register} errors={errors} update={update} append={append} fields={fields} contentRemove={contentRemove}/>
        </div>

        <div className=''>
          <p className='text-center text-white font-semibold'>ÜRÜN İÇERİĞİ</p>
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
                      watchAllFields={watchAllFields}
                      key={field.id} 

                    />)
                  
                })
              }
            </div>
        </div>

        <div>
          <ProductDesign index={index} control={control} register={register} errors={errors} watchAllFields={watchAllFields}/>
        </div>

        <div className='grid grid-cols-5 place-items-stretch h-fit gap-4 flex items-start'>
          
          <div className='w-16 h-12 flex justify-center items-end'>
            <p className='text-center text-white font-semibold'>TOPLAM ADET</p>
          </div>
          <div className='w-16 h-12 flex items-end justify-center'>
            <p className='text-center text-white font-semibold'>BİRİM (ÖLÇÜ)</p>
          </div>
          <div className='w-16 h-12 flex items-end justify-center'>
            <p className='text-center text-white font-semibold'>FİYAT</p>
          </div>
          <div className='w-16 h-12 flex items-end justify-center'>
            <p className='text-center text-white font-semibold'>BİRİM (PARA)</p>
          </div>
          <div className='w-16 h-12 flex items-end justify-center'>
            <p className='text-center text-white font-semibold'>TOPLAM</p>
          </div>
          
          <Pricing index={index} register={register} errors={errors} watchAllFields={watchAllFields} />
        </div>
        
        
      </div>
    </>
  )
}

export default Product;