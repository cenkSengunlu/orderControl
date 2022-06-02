import React, {useState, useEffect} from 'react';
import {useFormContext} from 'react-hook-form';
import ContentHeightWidth from './ContentHeightWidth';
import '../Toggle.css'

function Content({selectedItem, productId, contentIndex}) {

  // const [content, setContent] = useState([]);
  const [weightChecked, setWeightChecked] = useState(false);
  const [sizeChecked, setSizeChecked] = useState(false);
  const {register, unregister, formState: {errors}} = useFormContext({mode:'onBlur',});

  const handleChangeWeight = () => {
    // console.log(`${index} checked`);
    weightChecked ? setWeightChecked(false) : setWeightChecked(true);
  }

  useEffect(() => {
    if(!selectedItem){
      return;
    }
    console.log("Use Effect!");
    return () => {
      console.log("Unmount");
      unregister([`${contentIndex + 1}-contentHeight`, `${contentIndex + 1}-contentWidth`, `${contentIndex + 1}-readySize`, `${contentIndex + 1}-readySizeToggle`, `${contentIndex + 1}-sticth`, `${contentIndex + 1}-piece`, `${contentIndex + 1}-weight`, `${contentIndex + 1}-weightToggle`]);
    }
  }, [selectedItem, contentIndex, unregister]);

  const handleChangeSize = () => {
    // console.log(`${index} checked:` + sizeChecked);
    sizeChecked ? setSizeChecked(false) : setSizeChecked(true);
  }

  return (
    <>
      {selectedItem && 
        <>
          <div className='w-full my-10 p-2 border-2 border-zinc-300 rounded'>
            <div>
              <p className='py-1 px-2 bg-zinc-300 border-2 border-black rounded bg-zinc-100 flex justify-center items-center text-lg font-medium '>
                {selectedItem}
              </p>
            </div>

            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <div className=' w-32 h-18'>
                  {!sizeChecked &&
                    <ContentHeightWidth productId={productId} index={contentIndex + 1} />
                  }

                  {sizeChecked &&
                    <div className='h-16'>
                      <select className='w-full px-3 py-3 mt-2' {...register(`${productId}-${contentIndex + 1}-readySize`, {required: 'Ebad Seçiniz!'})}>
                        <option value="">Ebad Türü</option>
                        <option value={'Ebad 1'}>Ebad 1</option>
                        <option value={'Ebad 2'}>Ebad 2</option>
                        <option value={'Ebad 3'}>Ebad 3</option>
                      </select>
                      <p className='text-red-500 font-semibold text-xs px-1 mt-1'>{errors[`${productId}-${contentIndex + 1}-readySize`]?.message}</p>
                    </div>
                  }
                  
                  <div className='flex mt-1 justify-between'>
                    <p className='text-white font-medium text-md'>Hazır Ebad</p>

                    <div className="checkBox flex items-center">
                      <label className="switch">
                        <input type="checkbox" {...register (`${productId}-${contentIndex + 1}-readySizeToggle`)} onChange={() => handleChangeSize()}/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                  
                </div>
                

                <div>
                  <select className='w-full px-2 py-3 mt-2 h-18' {...register(`${productId}-${contentIndex + 1}-sticth`, {required: 'Dikiş Türü Seçiniz!'})}>
                    <option value="">Dikiş Türü</option>
                    <option value={'Dikiş 1'}>Dikiş 1</option>
                    <option value={'Dikiş 2'}>Dikiş 2</option>
                    <option value={'Dikiş 3'}>Dikiş 3</option>
                  </select>
                  <p className='text-red-500 font-semibold text-xs px-1 mt-1'>{errors[`${productId}-${contentIndex + 1}-sticth`]?.message}</p>
                </div>
                
              </div>

              <div className='flex flex-col w-24 mt-1'>
                <div className='flex flex-col'>
                  <p className='font-medium text-sm '>ADET:</p>
                  <input {...register (`${productId}-${contentIndex + 1}-piece`, {required: 'Ürün Adeti Giriniz!'})} className='rounded text-black py-0.5 px-2 w-full' min='0' type="number"/>
                  <p className='text-red-500 font-semibold text-xs px-1 mt-1'>{errors[`${productId}-${contentIndex + 1}-piece`]?.message}</p>
                </div>

                <div className='flex mt-3 justify-between'>
                  <p className='text-white font-medium text-md'>Gramaj</p>
                  <div className="checkBox flex items-center">
                    <label className="switch">
                      <input type="checkbox" {...register (`${productId}-${contentIndex + 1}-weightToggle`)} onChange={() => handleChangeWeight()}/>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                <div>
                  <select className='w-full pl-2 py-3 mt-2 h-18' {...register(`${productId}-${contentIndex + 1}-weight`, {
                    required: weightChecked ? 'Gramaj Seçiniz!' : false,
                    disabled: !weightChecked
                  })} disabled={!weightChecked}>
                    <option value="">Gramaj</option>
                    <option value={'Gramaj 1'}>Gramaj 1</option>
                    <option value={'Gramaj 2'}>Gramaj 2</option>
                    <option value={'Gramaj 3'}>Gramaj 3</option>
                  </select>
                  
                  <p className='text-red-500 font-semibold text-xs px-1 mt-1'>{weightChecked? errors[`${productId}-${contentIndex + 1}-weight`]?.message : ''}</p>
                </div>
              </div>

            </div>
            

            
            


            


            
            

          </div>
        </>
      }
    </>
  )
}

export default Content;