import React from 'react'
import {useFormContext} from 'react-hook-form';
function Test() {
    const {register, formState: {errors},} = useFormContext({mode:'onBlur',});
  return (
    
        <div>
            <p>Name</p>
            <input type="text" {...register ('name', {required: 'Enter Name'})} />
            <p className='text-red-500 font-semibold'>{errors.name?.message}</p>
        </div>
    
  )
}

export default Test