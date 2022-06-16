import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
// import justText from '../justText';
import SearchableDropdown from './SearchableDropdown';

function Selections({index, register, errors, update, append, fields, contentRemove, control}) {
  
  const [contentNames] = useState(['NEVRESİM', 'ÇARŞAF', 'STD. YASTIK KILIFI', 'OXF. YASTIK KILIFI', 'KIRLENT KILIFI']);
  
  const brandDataOptions = [
    { value: "Marka Bir", label: "Marka Bir" },
    { value: "Marka İki", label: "Marka İki" },
    { value: "Marka Üç", label: "Marka Üç" }
  ];

  const sizeDataOptions = [
    { value: "Beden Bir", label: "Beden Bir" },
    { value: "Beden İki", label: "Beden İki" },
    { value: "Beden Üç", label: "Beden Üç" }
  ];

  const productTypeDataOptions = [
    { value: "Ürün Cinsi Bir", label: "Ürün Cinsi Bir" },
    { value: "Ürün Cinsi İki", label: "Ürün Cinsi İki" },
    { value: "Ürün Cinsi Üç", label: "Ürün Cinsi Üç" }
  ];

  const packageTypeDataOptions = [
    { value: "Ambalaj Bir", label: "Ambalaj Bir" },
    { value: "Ambalaj İki", label: "Ambalaj İki" },
    { value: "Ambalaj Üç", label: "Ambalaj Üç" }
  ];
  


  return (
    <div className='text-black'>

      {/* Marka / Brand */}
      <div className='my-4'>
        <div>Marka:</div>
        <SearchableDropdown register={register} control={control} options={brandDataOptions} inputName={`products[${index}].brand`} errorMessage='Marka Seçiniz!' placeholder='Marka Seç' />
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.brand?.message}</p>
      </div>

      {/* Beden / Size */}
      <div className='my-4'>
        <div>Beden:</div>
        <SearchableDropdown register={register} control={control} options={sizeDataOptions} inputName={`products[${index}].size`} errorMessage='Boyut Seçiniz!' placeholder='Boyut Seç' />
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.size?.message}</p>
      </div> 
      
      {/* Ürün Cinsi / Product Type */}
      <div className='my-4'>
        <div>Ürün Cinsi:</div>
        <SearchableDropdown register={register} control={control} options={productTypeDataOptions} inputName={`products[${index}].productType`} errorMessage='Ürün Cinsi Seçiniz!' placeholder='Ürün Cinsi Seç' />
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.productType?.message}</p>
      </div>

      {/* içerikler / Contents */}
      <div className='my-4'>
        <div>İçerikler:</div>
        <div className='w-64 bg-white'>
          <Multiselect
            isObject={false}
            displayValue='value'
            className='max-w-64'
            style={{
              searchBox: {
                border: '1px solid #374151',
                // padding: '12px'
              }
            }}
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

      {/* Ambalaj / Package */}
      <div className='my-4'>
        <div>Ambalaj:</div>
        <SearchableDropdown register={register} control={control} options={packageTypeDataOptions} inputName={`products[${index}].package`} errorMessage='Ambalaj Seçiniz!' placeholder='Ambalaj Seç' />
        <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.package?.message}</p>
      </div>
    </div>
  );
}

export default Selections;