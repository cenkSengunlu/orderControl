import React, {useContext} from 'react';
import SelectionForm from './SelectionForm';
import Content from './Content';
import SelectContext from '../context/SelectContext';
import ProductDesign from './ProductDesign';

function ProductComponent({index}) {
  
  const {select} = useContext(SelectContext);
  return (
    <>
      <div className='flex grid grid-flow-col auto-cols-max gap-8 w-fit bg-zinc-600 px-4 py-3'>
        <div className='text-white'>
          <p className='font-semibold'>SIRA</p>
          <p className='my-4'>{index}</p>
        </div>

        <div>
          <p className='text-center text-white font-semibold'>SEÇİMLER</p>
          <SelectionForm index={index}/>
        </div>

        <div className=''>
          <p className='text-center text-white font-semibold'>ÜRÜN İÇERİĞİ</p>
            <div className='w-64'>
              {select[`${index}-select`] && select[`${index}-select`].map((item, mapIndex) => {
                return(
                  <div key={mapIndex}>
                    <Content item={item} index={mapIndex}/>
                  </div>
                )
              })}
            </div>
        </div>

        <div>
          <ProductDesign  />
        </div>
        
        
      </div>
    </>
  )
}

export default ProductComponent;