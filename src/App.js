import React, {useEffect} from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import Product from './components/Product';
import CustomerForm from './components/CustomerForm'

import TotalFooter from './components/TotalFooter';


function App() {
  const { control, handleSubmit, register, watch, setError, setValue, clearErrors, formState: {errors, submitCount}, trigger } = useForm({mode:'all', reValidateMode: 'onSubmit'});
  const watchAllFields = watch();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "products",
    defaultValues: {
      ["products"]: []
    }
  });

  useEffect(() => {
      
    if (!fields.length && submitCount > 0) {

      setError(`products`, { type: 'custom', message: 'Ürün Ekleyin!' });  
      trigger(`products`);
    }
  }, [fields, setError, submitCount]);

  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomerForm register={register} errors={errors} control={control} watchAllFields={watchAllFields} />
        <button
          className='bg-blue-500 text-white rounded p-2 my-3 mx-3 cursor-pointer select-none'
          type="button"
          onClick={() => {
            append({
              brand: '',
              size: '',
              productType: '',
              content:[],
              package: '',
              productDesignItems: [],
              pricing: {
                totalNumber: 0,
                price: 0,
                currencyUnit: '',
                totalPrice: 0
              }
            });
            if(errors?.products?.type === 'custom'){
              clearErrors(`products`);
            }
          }}
        >
          ÜRÜN EKLE
        </button>
        <button className='bg-green-500 text-white rounded p-2 my-3' type='submit' onClick={() => trigger()}>Yazdır</button>
        {fields.map((field, index) => (
          <fieldset key={field.id}>
            <Product
              control={control}
              index={index}
              register={register}
              productRemove={remove}
              errors={errors}
              setError={setError}
              watchAllFields={watchAllFields}
              setValue={setValue}
              clearErrors={clearErrors}
              trigger={trigger}
              submitCount={submitCount}
            />
          </fieldset>
        ))}
      </form>
      <p className='text-red-500 font-semibold text-lg font-semibold mt-1 mx-3'>{errors?.products?.message}</p>
      <TotalFooter watchAllFields={watchAllFields}/>
    </>
  );
}

export default App;
