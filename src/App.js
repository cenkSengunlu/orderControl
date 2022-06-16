import React from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import Product from './components/Product';
import CustomerForm from './components/CustomerForm'

import TotalFooter from './components/TotalFooter';


function App() {
  const { control, handleSubmit, register, watch, setError, setValue, formState: {errors}, trigger } = useForm({criteriaMode: "all", reValidateMode: 'onSubmit'});
  const watchAllFields = watch();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "products",
    defaultValues: {
      ["products"]: []
    }
  });

  
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomerForm register={register} errors={errors} control={control} />
        <button
          className='bg-blue-500 text-white rounded p-2 my-3 mx-2 cursor-pointer select-none'
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
            />
          </fieldset>
        ))}
      </form>
      <TotalFooter watchAllFields={watchAllFields}/>
    </>
  );
}

export default App;
