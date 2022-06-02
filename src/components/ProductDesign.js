import React, {useState, useContext} from 'react';
import ProductDesignContext from '../context/ProductDesignContext';
import ProductDesignItems from './ProductDesignItems';


function ProductDesign({productDesignId}) {
  const [i, setI] = useState(1);
  const {productDesignEvent, setProductDesignEvent} = useContext(ProductDesignContext);

  const handleClick = () => {

    setI(prev => prev + 1);
    const item = {
      id: i,
      amount: '',
      colors: '',
      patterns: '',
      groups: ''
    }
    // const list = [...productDesignEvent, item];
    let list = productDesignEvent;
    
    list[productDesignId - 1] = list[productDesignId - 1] ? [...list[productDesignId - 1], item] : [...[], item];
    console.log(list);
    // setProductDesignObj(productDesignObj => ({...productDesignObj, [`${productDesignId}-productDesignItem`]: [...list] }));
    setProductDesignEvent(list);
    // // console.log('eklendi');
    // console.log(productDesignObj);
    // console.log([...productDesignEvent, item]);

    // let list2 = productDesignEvent;
    
    // list2[productDesignId - 1] = list2[productDesignId - 1] ? [...list2[productDesignId - 1], item] : [...[], item];
    // console.log(list2);
  }

  return (
    <>
      <div className='grid grid-cols-5 auto-cols-fr gap-2'>
        <div className='w-36'>
          <p className='text-center text-white font-semibold'>İŞLEM</p>
        </div>
        <div className='w-36'>
          <p className='text-center text-white font-semibold'>GRUPLAR</p>
        </div>
        <div className='w-36'>
          <p className='text-center text-white font-semibold'>DESENLER</p>
        </div>
        <div className='w-36'>
          <p className='text-center text-white font-semibold'>RENKLER</p>
        </div>
        <div className='flex justify-start ml-2 w-32'>
          <p className='text-center text-white font-semibold'>MİKTAR</p>
        </div>
        {productDesignEvent[productDesignId - 1] && productDesignEvent[productDesignId - 1].map((item, index) => {
            return(
              <ProductDesignItems productDesignItem={item} productDesignId={productDesignId} itemId={item.id} itemIndex={index} key={index}/>
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