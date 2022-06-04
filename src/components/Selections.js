import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import justText from '../justText';

function Selections({index, register, errors, update, append, fields, contentRemove}) {
  
  const [contentNames] = useState(['NEVRESİM', 'ÇARŞAF', 'STD. YASTIK KILIFI', 'OXF. YASTIK KILIFI', 'KIRLENT KILIFI']);
  
  


  return (
    <>
      <div className='my-4'>
        <div>Marka:</div>
        <input type="text" list="brandData"  className='w-64 px-3 py-3' {...register(`products[${index}].brand`, {required: 'Marka Seçiniz!'})} placeholder='Marka Seç' onKeyPress={(event) => justText(event)} />
        <datalist id="brandData">
          <option value={'Marka Bir'}>Marka Bir</option>
          <option value={'Marka İki'}>Marka İki</option>
          <option value={'Marka Üç'}>Marka Üç</option>
        </datalist>
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.brand?.message}</p>
      </div>

      <div className='my-4'>
        <div>Beden:</div>
        <input type="text" list="sizeData"  className='w-64 px-3 py-3' {...register(`products[${index}].size`, {required: 'Boyut Seçiniz!'})} placeholder='Boyut Seç' onKeyPress={(event) => justText(event)} />
        <datalist id="sizeData">
          <option value='Beden Bir'>Beden Bir</option>
          <option value="Beden İki">Beden İki</option>
          <option value="Beden Üç">Beden Üç</option>
        </datalist>
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.size?.message}</p>
      </div>


      <div className='my-4'>
        <div>Ürün Cinsi:</div>
        <input type="text" list="productTypeData"  className='w-64 px-3 py-3' {...register(`products[${index}].productType`, {required: 'Ürün Tipi Seçiniz!'})} placeholder='Ürün Cinsi Seç' onKeyPress={(event) => justText(event)} />
        <datalist id="productTypeData">
          <option value='Ürün Cinsi Bir'>Ürün Cinsi Bir</option>
          <option value="Ürün Cinsi İki">Ürün Cinsi İki</option>
          <option value="Ürün Cinsi Üç">Ürün Cinsi Üç</option>
        </datalist>
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.productType?.message}</p>
      </div>

      <div className='my-4'>
        <div>İçerikler:</div>
        <div className='w-64'>
          <Multiselect
            isObject={false}
            displayValue='value'
            className='max-w-64'
            onKeyPressFn={function noRefCheck(){}}
            onRemove={(selectedList, removedItem) => {
              contentRemove(fields.map((item) => item.contentName

              ).indexOf(removedItem))
            }}
            onSearch={function noRefCheck(){}}
            onSelect={(selectedList, selectedItem) => {
              append({
                contentName: selectedItem,
                contentPiece: '',
                readySizeSelected: false,
                contentReadySize: '',
                contentHeight: '',
                contentWidth: '',
                weightSelected: false,
                contentStitch: ''
              })
            }}
            options={contentNames}
            showCheckbox
            placeholder="İçerik Seç"
            avoidHighlightFirstOption={true}
          />
        </div>
      </div>


      <div className='my-4'>
        <div>Ambalaj:</div>
        <input type="text" list="packageData"  className='w-64 px-3 py-3' {...register(`products[${index}].package`, {required: 'Ambalaj Seçiniz!'})} placeholder='Ambalaj Seç' onKeyPress={(event) => justText(event)} />
        <datalist id="packageData">
          <option value='Ambalaj Bir'>Ambalaj Bir</option>
          <option value="Ambalaj İki">Ambalaj İki</option>
          <option value="Ambalaj Üç">Ambalaj Üç</option>
        </datalist>
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.package?.message}</p>
      </div>
    </>
  );
}

export default Selections;