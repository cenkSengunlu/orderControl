import React from 'react';
import justText from '../justText';
import justNumber from '../justNumber';

function CustomerForm({register, errors}) {
  return (
    <>
      <div className='px-5 flex justify-around w-full h-fit items-start flex-wrap'>
          <div>
            <div>ALICI ADI</div>
            <input {...register ('customerName', {required: 'Alıcı Adı Giriniz!'})} className='border border-gray-500 rounded text-black py-0.5 px-2' type="text" placeholder="Alıcı İsmi Girin" onKeyPress={(event) => justText(event)}/>
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors?.customerName?.message}</p>
          </div>

          <div>
            <div>ALICI CARİ KOD</div>
            <input {...register ('customerCode', {required: 'Alıcı Cari Kodu Giriniz!'})}  className='border border-gray-500 rounded text-black py-0.5 px-2' type="text" placeholder='Alıcı Cari Kod' onKeyPress={(event) => justText(event)}/>
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors?.customerCode?.message}</p>
          </div>


          <div>
            <div>TESLİM</div>
            <input type="text" list="deliveryData" {...register ('delivery', {required: 'Teslimat Seçiniz!'})} className='w-32 py-0.5 px-1 border border-gray-500' placeholder='Seçiniz...' onKeyPress={(event) => justText(event)}/>
            <datalist id="deliveryData">
              <option value="Teslim Bir">Teslim Bir</option>
              <option value="Teslim İki">Teslim İki</option>
              <option value="Teslim Üç">Teslim Üç</option>
            </datalist>
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors?.delivery?.message}</p>
          </div>

          <div>
            <div>TESLİM İÇİN ÖZEL KOD</div>
            <input {...register ('deliveryCode', {required: 'Teslimat İçin Özel Kod Giriniz!'})} className='border border-gray-500 rounded text-black py-0.5 px-2' type="text" placeholder='Teslim İçin Özel Kod' onKeyPress={(event) => justText(event)}/>
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors?.deliveryCode?.message}</p>
          </div>

          <div>
            <div>SATICI</div>
            <input type="text" list="sellerData" {...register ('seller', {required: 'Satııcı Seçiniz!'})} className='w-32 py-0.5 px-1 border border-gray-500' placeholder='Seçiniz...' onKeyPress={(event) => justText(event)}/>
            <datalist id="sellerData">
              <option value="Satıcı Bir">Satıcı Bir</option>
              <option value="Satıcı İki">Satıcı İki</option>
              <option value="Satıcı Üç">Satıcı Üç</option>
            </datalist>
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors?.seller?.message}</p>
          </div>

          <div>
            <div>BANKA</div>
            <input type="text" list="bankData" {...register ('bank', {required: 'Banka Seçiniz!'})} className='w-32 py-0.5 px-1 border border-gray-500' placeholder='Seçiniz...' onKeyPress={(event) => justText(event)}/>
            <datalist id="bankData">
              <option value="Banka Bir">Banka Bir</option>
              <option value="Banka İki">Banka İki</option>
              <option value="Banka Üç">Banka Üç</option>
            </datalist>
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors?.bank?.message}</p>
          </div>


          <div>
            <div>ÖDEME</div>
            <input type="text" list="paymentData" {...register ('payment', {required: 'Ödeme Yöntemi Seçiniz!'})} className='w-32 py-0.5 px-1 border border-gray-500' placeholder='Seçiniz...' onKeyPress={(event) => justText(event)}/>
            <datalist id="paymentData">
              <option value="Nakit">Nakit</option>
              <option value="Kredi Kartı">Kredi Kartı</option>
              <option value="Altta Input Çıkacak">Altta Input Çıkacak</option>
            </datalist>
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors?.payment?.message}</p>
          </div>

          <div>
            <div>FATURA NO.</div>
            <input {...register ('billNo', {required: 'Fatura No. Giriniz!'})} className='border border-gray-500 rounded text-black py-0.5 px-2' type="number" placeholder='Fatura No' onKeyPress={(event) => justNumber(event)}/>
            <p className='text-red-500 font-semibold text-sm px-2 mt-1'>{errors?.billNo?.message}</p>
          </div>
        



      </div>
    </>
  )
}

export default CustomerForm;