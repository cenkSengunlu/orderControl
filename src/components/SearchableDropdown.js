import React from 'react';
import Select from 'react-select';
import { Controller } from "react-hook-form";

function SearchableDropdown({register, control, inputName, errorMessage, options, placeholder}) {


  return (
    <Controller
       render={({ field }) => (
         <Select {...field} options={options} placeholder={<div>{placeholder}</div>} noOptionsMessage={() => "Aradığınız Değer Bulunamadı!"} />
       )}
       control={control}
      
       {...register(`${inputName}`, {required: `${errorMessage}`})}
     />
  )
}

export default SearchableDropdown;