import React from 'react';
import Select from 'react-select';
import { Controller } from "react-hook-form";

function SearchableDropdown({register, control, inputName, errorMessage, options, placeholder, customStyleCss}) {

  const colourStyles = {
    control: styles => ({ ...styles,
      border: '1px #374151 solid',
      height: '8px',
      // width: customStyleCss ? '' : '256px'
    })
  };
  
  return (
    <div className='max-w-sm'>
      <Controller
        render={({ field: { onChange, value, ref } }) => { 
         const currentSelection = options.find(
           (e) => e.value === value
         );   
         const handleSelectChange = (selectedOption) => {
           onChange(selectedOption?.value);
         };
         return(
           <Select 
             isClearable 
             inputRef={ref}
             options={options} 
             value={currentSelection} 
             onChange={handleSelectChange}  
             placeholder={<div>{placeholder}</div>} 
             noOptionsMessage={() => "Aradığınız Değer Bulunamadı!"} 
             styles={colourStyles}
             className='max-w-sm'
           />
         )

        }}
        control={control}

        {...register(`${inputName}`, {required: `${errorMessage}`})}
      />
    </div>
    
  )
}

export default SearchableDropdown;