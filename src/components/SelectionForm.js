import React, {useState,useContext, useEffect} from 'react';
import {useFormContext} from 'react-hook-form';
import Multiselect from 'multiselect-react-dropdown';
import SelectContext from '../context/SelectContext';

function SelectionForm({index}) {
  const {register, formState: {errors}} = useFormContext({mode:'onBlur',});
  const [content] = useState(['NEVRESİM', 'ÇARŞAF', 'STD. YASTIK KILIFI', 'OXF. YASTIK KILIFI', 'KIRLENT KILIFI']);
  const {select, setSelect} = useContext(SelectContext);

  useEffect(() => {
    if(!select){
      return;
    }
    console.log(select);
  }, [select]);

  
  return (
    <>
        <div className='my-4'>
          <div>Marka:</div>
          <select className='w-64 px-3 py-3' {...register(`${index}-brand`, {required: 'Marka Seçiniz!'})} id="brand">
            <option value="">Marka Seç</option>
            <option value={'Marka 1'}>Marka 1</option>
            <option value={'Marka 2'}>Marka 2</option>
            <option value={'Marka 3'}>Marka 3</option>
          </select>
          <p>{errors[`${index}-brand`]?.message}</p>
        </div>

        <div className='my-4'>
          <div>Beden:</div>
          <select className='w-64 px-3 py-3' {...register(`${index}-size`, {required: 'Beden Seçiniz!'})} id="size">
            <option value="">Beden Seç</option>
            <option value='Beden 1'>Beden 1</option>
            <option value="Beden 2">Beden 2</option>
            <option value="Beden 3">Beden 3</option>
          </select>
          <p>{errors[`${index}-size`]?.message}</p>
        </div>

        <div className='my-4'>
          <div>Ürün Cinsi:</div>
          <select className='w-64 px-3 py-3' {...register(`${index}-productType`, {required: 'Ürün Cinsi Seçiniz!'})} id="productType">
            <option value="">Ürün Cinsi Seç</option>
            <option value='Ürün Cinsi 1'>Ürün Cinsi 1</option>
            <option value="Ürün Cinsi 2">Ürün Cinsi 2</option>
            <option value="Ürün Cinsi 3">Ürün Cinsi 3</option>
          </select>
          <p>{errors[`${index}-productType`]?.message}</p>
        </div>

        <div className='my-4'>
          <div>İçerikler:</div>
          <div className='w-64'>
            <Multiselect
              isObject={false}
              displayValue='value'
              className='max-w-fit'
              {...register(`${index}-content` )}
              onKeyPressFn={function noRefCheck(){}}
              onRemove={(event) => {
                setSelect(select => ({...select, [`${index}-select`]: [...event] }));
              }}
              onSearch={function noRefCheck(){}}
              onSelect={(event) => {
                console.log(event);
                setSelect(select => ({...select, [`${index}-select`]: [...event] }));
              }}
              options={content}
              showCheckbox
              placeholder="İçerik Seç"
              avoidHighlightFirstOption={true}
            />
            <p>{errors[`${index}-content`]?.message}</p>
          </div>
        </div>

        <div className='my-4'>
          <div>Ambalaj:</div>
          <select className='w-64 px-3 py-3' {...register(`${index}-pack`, {required: 'Ambalaj Seçiniz!'})} id="pack">
            <option value="">Ambalaj Seç</option>
            <option value='Ambalaj 1'>Ambalaj 1</option>
            <option value="Ambalaj 2">Ambalaj 2</option>
            <option value="Ambalaj 3">Ambalaj 3</option>
          </select>
          <p>{errors[`${index}-pack`]?.message}</p>
        </div>
      
    </>
  )
}

export default SelectionForm;