import React from 'react';
import {useForm} from 'react-hook-form';



function CustomerForm() {

  const {register,handleSubmit, formState: {errors},} = useForm({mode:'onBlur',});

  return (
    <>
      <div className='px-5 '>
        <form onSubmit={handleSubmit((data) => {
          console.log(data);
        })} className='flex justify-around w-full h-fit items-start flex-wrap'>
          <div>
            <div>ALICI ADI</div>
            <input {...register ('customerName', {required: 'Alıcı Adı Giriniz!'})} className='bg-zinc-300 rounded text-black py-0.5 px-2' type="text" placeholder="Alıcı İsmi Girin"/>
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors.customerName?.message}</p>
          </div>

          <div>
            <div>ALICI CARİ KOD</div>
            <input {...register ('customerCode', {required: 'Alıcı Cari Kodu Giriniz!'})}  className='bg-zinc-300 rounded text-black py-0.5 px-2' type="text" placeholder='Alıcı Cari Kod'/>
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors.customerCode?.message}</p>
          </div>

          <div>
            <div>TESLİM</div>
            <select {...register ('delivery', {required: 'Teslimat Seçiniz!'})} id='delivery' className='w-28 py-0.5 px-1'>
              <option value="">Seçiniz...</option>
              <option value="teslim1">Teslim 1</option>
              <option value="teslim2">Teslim 2</option>
            </select>
            {/* <input {...register ('delivery', {required: 'Teslimat Giriniz!'})} className='bg-zinc-300 rounded text-black py-0.5 px-2' type="text" placeholder=''/> */}
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors.delivery?.message}</p>
          </div>

          <div>
            <div>TESLİM İÇİN ÖZEL KOD</div>
            <input {...register ('deliveryCode', {required: 'Teslimat İçin Özel Kod Giriniz!'})} className='bg-zinc-300 rounded text-black py-0.5 px-2' type="text" placeholder='Teslim İçin Özel Kod'/>
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors.deliveryCode?.message}</p>
          </div>

          <div>
            <div>SATICI</div>
            <select {...register ('seller', {required: 'Satıcı Seçiniz!'})} id='seller' className='w-32 py-0.5 px-1'>
              <option value="">Satıcı Seçiniz!</option>
              <option value="satıcı1">Satıcı 1</option>
              <option value="satıcı2">Satıcı 2</option>
            </select>
            {/* <input {...register ('seller', {required: 'Satıcı Giriniz!'})} className='bg-zinc-300 rounded text-black py-0.5 px-2' type="text" placeholder=''/> */}
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors.seller?.message}</p>
          </div>

          <div>
            <div>BANKA</div>
            <select {...register ('bank', {required: 'Banka Seçiniz!'})} id='bank' className='w-32 py-0.5 px-1'>
              <option value="" className='text-zinc-500 font-semibold text-xs'>Banka Seçiniz!</option>
              <option value="banka1">Banka 1</option>
              <option value="banka2">Banka 2</option>
            </select>
            {/* <input {...register ('bank', {required: 'Banka Giriniz!'})} className='bg-zinc-300 rounded text-black py-0.5 px-2' type="text" placeholder=''/> */}
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors.bank?.message}</p>
          </div>

          <div>
            <div>ÖDEME</div>
            <select {...register ('payment', {required: 'Ödeme Yöntemi Seçiniz!'})} id='payment' className='w-52 py-0.5 px-1'>
              <option value="">Ödeme Yöntemi Seçiniz!</option>
              <option value="odeme1">Ödeme 1</option>
              <option value="odeme2">Ödeme 2</option>
            </select>
            {/* <input {...register ('payment', {required: 'Ödeme Giriniz!'})} className='bg-zinc-300 rounded text-black py-0.5 px-2' type="text" placeholder=''/> */}
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors.payment?.message}</p>
          </div>

          <div>
            <div>FATURA NO.</div>
            <input {...register ('billNo', {required: 'Fatura No. Giriniz!'})} className='bg-zinc-300 rounded text-black py-0.5 px-2' type="text" placeholder='Fatura No'/>
            <p className='text-red-500 font-semibold text-sm px-2 mt-1'>{errors.billNo?.message}</p>
          </div>

          <div>
            <button type='submit' className='bg-green-500 text-white rounded p-2 mt-3 text-lg font-semibold'>Kaydet</button>
          </div>
        </form>



      </div>
    </>
  )
}

export default CustomerForm;