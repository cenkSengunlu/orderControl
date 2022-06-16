import React from 'react';
import justText from '../justText';
import justNumber from '../justNumber';
import SearchableDropdown from './SearchableDropdown';

function CustomerForm({register, errors, control}) {

  const deliveryDataOptions = [
    { value: "Teslim Bir", label: "Teslim Bir" },
    { value: "Teslim İki", label: "Teslim İki" },
    { value: "Teslim Üç", label: "Teslim Üç" }
  ];

  const sellerDataOptions = [
    { value: "Satıcı Bir", label: "Satıcı Bir" },
    { value: "Satıcı İki", label: "Satıcı İki" },
    { value: "Satıcı Üç", label: "Satıcı Üç" }
  ];

  const bankDataOptions = [
    { value: "Banka Bir", label: "Banka Bir" },
    { value: "Banka İki", label: "Banka İki" },
    { value: "Banka Üç", label: "Banka Üç" }
  ];

  const paymentDataOptions = [
    { value: "Nakit", label: "Nakit" },
    { value: "Kredi Kartı", label: "Kredi Kartı" },
    { value: "Altta Input Çıkacak", label: "Altta Input Çıkacak" }
  ];

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
            <SearchableDropdown register={register} control={control} options={deliveryDataOptions} inputName={`delivery`} errorMessage='Teslimat Seçiniz!' placeholder='Seçiniz...' />
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors?.delivery?.message}</p>
          </div>

          <div>
            <div>TESLİM İÇİN ÖZEL KOD</div>
            <input {...register ('deliveryCode', {required: 'Teslimat İçin Özel Kod Giriniz!'})} className='border border-gray-500 rounded text-black py-0.5 px-2' type="text" placeholder='Teslim İçin Özel Kod' onKeyPress={(event) => justText(event)}/>
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors?.deliveryCode?.message}</p>
          </div>

          <div>
            <div>SATICI</div>
            <SearchableDropdown register={register} control={control} options={sellerDataOptions} inputName={`seller`} errorMessage='Satıcı Seçiniz!' placeholder='Seçiniz...' />
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors?.seller?.message}</p>
          </div>

          <div>
            <div>BANKA</div>
            <SearchableDropdown register={register} control={control} options={bankDataOptions} inputName={`bank`} errorMessage='Banka Seçiniz!' placeholder='Seçiniz...' />
            <p className='text-red-500 font-semibold text-sm px-1 mt-1'>{errors?.bank?.message}</p>
          </div>


          <div>
            <div>ÖDEME</div>
            <SearchableDropdown register={register} control={control} options={paymentDataOptions} inputName={`payment`} errorMessage='Ödeme Yöntemi Seçiniz!' placeholder='Seçiniz...' />
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