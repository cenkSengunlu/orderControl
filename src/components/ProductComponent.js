import React, {useContext} from 'react';
import SelectionForm from './SelectionForm';
import Content from './Content';
import SelectContext from '../context/SelectContext';
import ProductDesign from './ProductDesign';
import Pricing from './Pricing';
import ProductContext from '../context/ProductContext';
import ProductDesignContext from '../context/ProductDesignContext';
import {useFormContext} from 'react-hook-form';

function ProductComponent({productId, productIndex}) {
  const {product, setProduct} = useContext(ProductContext);
  const {productDesignEvent, setProductDesignEvent} = useContext(ProductDesignContext);
  const {select} = useContext(SelectContext);
  const {unregister} = useFormContext({mode:'onBlur',});

  const deleteProduct = (delId, delIndex) => {
    unregister([`${delId}-brand`, `${delId}-pack`, `${delId}-productType`, `${delId}-size`, `${delId}-totalNumber`, `${delId}-totalPrice`, `${delId}-unitSize`, `${delId}-curreneyUnit`, `${delId}-content`, `${delId}-price`]);
    const list = [...product];
    console.log(list[delIndex]);
    list.splice(delIndex, 1);
    setProduct(list);
    
  }


  return (
    <>
      <div className='flex grid grid-flow-col auto-cols-max gap-6 w-fit bg-zinc-600 px-4 py-3'>
        <div className='text-white'>
          <p className='font-semibold'>SIRA</p>
          <p className='my-4'>{productIndex + 1}</p>
          <div className='bg-red-500 rounded-md border-2 border-red-600 p-2 text-sm font-medium cursor-pointer select-none' onClick={() => deleteProduct(productId, productIndex)}>SİL</div>
        </div>

        <div>
          <p className='text-center text-white font-semibold'>SEÇİMLER</p>
          <SelectionForm index={productId}/>
        </div>

        <div className=''>
          <p className='text-center text-white font-semibold'>ÜRÜN İÇERİĞİ</p>
            <div className='w-64'>
              {select[`${productId}-select`] && select[`${productId}-select`].map((item, mapIndex) => {
                return(
                  <Content selectedItem={item} productId={productId} contentIndex={mapIndex} key={mapIndex}/>
                )
              })}
            </div>
        </div>

        <div>
          <ProductDesign productDesignId={productId} />
        </div>

        <div className='grid grid-cols-5 place-items-stretch h-fit gap-4'>
          
          <div className='w-16 h-12 flex justify-center items-end'>
            <p className='text-center text-white font-semibold'>TOPLAM ADET</p>
          </div>
          <div className='w-16 h-12 flex items-end justify-center'>
            <p className='text-center text-white font-semibold'>BİRİM (ÖLÇÜ)</p>
          </div>
          <div className='w-16 h-12 flex items-end justify-center'>
            <p className='text-center text-white font-semibold'>FİYAT</p>
          </div>
          <div className='w-16 h-12 flex items-end justify-center'>
            <p className='text-center text-white font-semibold'>BİRİM (PARA)</p>
          </div>
          <div className='w-16 h-12 flex items-end justify-center'>
            <p className='text-center text-white font-semibold'>TOPLAM</p>
          </div>
          
          <Pricing pricingId={productId} pricingIndex={productIndex}/>
        </div>
        
        
      </div>
    </>
  )
}

export default ProductComponent;