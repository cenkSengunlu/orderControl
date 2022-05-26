import React, {useState, useContext} from 'react';
import ProductDesignContext from '../context/ProductDesignContext';
import ProductDesignItems from './ProductDesignItems';


function ProductDesign() {
  const [i, setI] = useState(1);
  const {productDesign, setProductDesign} = useContext(ProductDesignContext);

  const handleClick = () => {
    setI(prev => prev + 1);
    const item = {
      id: i,
      amount: '',
      colors: '',
      patterns: '',
      groups: ''
    }

    setProductDesign(productDesign => [...productDesign, item])
    // console.log('eklendi');
    console.log([...productDesign, item]);
  }

  return (
    <>
      <div className='grid grid-cols-5 place-items-stretch gap-2 w-fit'>
        <div className=''>
          <p className='text-center text-white font-semibold'>İŞLEM</p>
        </div>
        <div>
          <p className='text-center text-white font-semibold'>GRUPLAR</p>
        </div>
        <div>
          <p className='text-center text-white font-semibold'>DESENLER</p>
        </div>
        <div>
          <p className='text-center text-white font-semibold'>RENKLER</p>
        </div>
        <div className='flex justify-start ml-2'>
          <p className='text-center text-white font-semibold'>MİKTAR</p>
        </div>
        {productDesign.map((item, index) => {
            return(
              <ProductDesignItems itemId={item.id} itemIndex={index} key={index}/>
            )
          })}
      </div>
      <div className='w-full flex justify-center select-none mt-3'>
        <div className="w-36 bg-zinc-400 border-2 border-zinc-800 flex justify-center cursor-pointer items-center rounded-full" onClick={() => handleClick()}>
          <div className="border-2 rounded-full px-0.5 border-zinc-800 text-white font-semibold text-lg">+</div>
        </div>
      </div>
    </>
    
  )
}

export default ProductDesign;