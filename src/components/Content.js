import React, {useState} from 'react';
import ContentHeightWidth from './ContentHeightWidth';
import '../Toggle.css';
import justText from '../justText';
import justNumber from '../justNumber';

function Content({selectedItem, index, sub_index, register, errors, watchAllFields}) {
  const [weightChecked, setWeightChecked] = useState(false);
  const [sizeChecked, setSizeChecked] = useState(false);

  const handleChangeWeight = () => {
    weightChecked ? setWeightChecked(false) : setWeightChecked(true);
  }

  const handleChangeSize = () => {
    sizeChecked ? setSizeChecked(false) : setSizeChecked(true);
  }

  return(
    

    <>
      {selectedItem &&
        <>
          <div className='w-full my-10 p-2 border-2 border-zinc-300 rounded'>

            <div>
              <input type="text" readOnly {...register(`products[${index}].content[${sub_index}].contentName`, {required: 'Boyut Seçiniz!'})} className='py-1 px-2 bg-zinc-300 border-2 border-black rounded bg-zinc-100 text-center text-lg font-medium' value={selectedItem.contentName}/>
            </div>

            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <div className=' w-32 h-fit'>

                  

                  
                    <div className='h-20 mt-1'>
                      <p className='font-medium text-sm '>EBAD:</p>
                        {!sizeChecked &&
                          <ContentHeightWidth index={index} sub_index={sub_index} register={register} errors={errors} />
                        }
                        {sizeChecked &&
                          <div>
                            <input type="text" list="readySizeData" className='w-full px-3 py-3 mt-1' {...register(`products[${index}].content[${sub_index}].contentReadySize`, {required: 'Boyut Seçiniz!'})} placeholder='Seçiniz...'  onKeyPress={(event) => justText(event)}/>
                            <datalist id="readySizeData">
                              <option value={'Ebad Bir'}>Ebad Bir</option>
                              <option value={'Ebad İki'}>Ebad İki</option>
                              <option value={'Ebad Üç'}>Ebad Üç</option>
                            </datalist>
                            <p className='text-red-500 font-semibold text-sm'>{errors.products?.[index]?.content?.[sub_index]?.contentReadySize?.message}</p>
                          </div>
                        }
                      
                    </div>
                  

                  <div className='flex mt-3 justify-between'>
                    <p className='text-white font-medium text-md'>Hazır Ebad</p>

                    <div className="checkBox flex items-center">
                      <label className="switch">
                        <input type="checkbox" {...register (`products[${index}].content[${sub_index}].readySizeSelected`)} onChange={() => handleChangeSize()}/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div>
                  <p className='font-medium text-sm mt-1'>DİKİŞ:</p>
                  <input type="text" list="sticthData" className='w-full px-3 py-3 mt-1' {...register(`products[${index}].content[${sub_index}].contentStitch`, {required: 'Dikiş Türü Seçiniz!'})} placeholder='Seçiniz...'  onKeyPress={(event) => justText(event)}/>
                  <datalist id="sticthData">
                    <option value={'Dikiş Bir'}>Dikiş Bir</option>
                    <option value={'Dikiş İki'}>Dikiş İki</option>
                    <option value={'Dikiş Üç'}>Dikiş Üç</option>
                  </datalist>
                  <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.content?.[sub_index]?.contentStitch?.message}</p>
                </div>
                </div>
                  
                
              </div>

              <div className='flex flex-col w-24 mt-1'>
                <div className='flex flex-col'>
                  <p className='font-medium text-sm mb-1'>ADET:</p>
                  <input {...register (`products[${index}].content[${sub_index}].contentPiece`, {required: 'Ürün Adeti Giriniz!', min:{value: 1, message: "Ürün Adeti 0'dan büyük olmalı"}})} className='rounded text-black py-0.5 px-2 w-full' min='0' type="number" onKeyPress={(event) => justNumber(event)}/>
                  <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.content?.[sub_index]?.contentPiece?.message}</p>
                </div>

                <div className='flex mt-3 justify-between'>
                  <p className='text-white font-medium text-md'>Gramaj</p>
                  <div className="checkBox flex items-center">
                    <label className="switch">
                      <input type="checkbox" {...register (`products[${index}].content[${sub_index}].weightSelected`)} onChange={() => handleChangeWeight()}/>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>

                <div className='flex flex-col'>
                  {!weightChecked &&
                    <div>
                      <input {...register (`products[${index}].content[${sub_index}].contentWeight`, {required: 'Gramaj Giriniz!', min:{value: 1, message: "Gramaj 0'dan büyük olmalı"}})} className='rounded text-black py-0.5 px-2 w-full mt-2' min='0' type="number" onKeyPress={(event) => justNumber(event)}/>
                    </div>
                  }
                  {weightChecked &&
                    <div>
                      <input type="text" list="weightData" className='w-full px-3 py-3 mt-2' {...register(`products[${index}].content[${sub_index}].contentWeight`, {required: 'Gramaj Seçiniz!'})} placeholder='Seçiniz...'  onKeyPress={(event) => justText(event)}/>
                      <datalist id="weightData">
                        <option value={'Gramaj Bir'}>Gramaj Bir</option>
                        <option value={'Gramaj İki'}>Gramaj İki</option>
                        <option value={'Gramaj Üç'}>Gramaj Üç</option>
                      </datalist>
                    </div>
                  }
                  <p className='text-red-500 font-semibold text-sm mt-1'>{errors.products?.[index]?.content?.[sub_index]?.contentWeight?.message}</p>
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