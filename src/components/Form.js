import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';

function Form(props) {
  const methods = useForm();
  
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(props.onSubmit)}>
        {props.children}
      </form>
    </FormProvider>
  )
}

export default Form;