import React from 'react';

function TotalFooter({watchAllFields}) {

  const orderTotalPrice = watchAllFields.products && watchAllFields.products.reduce((acc, val) => {
    acc[val.pricing.currencyUnit] = (acc[val.pricing.currencyUnit] || 0) + parseInt(val.pricing.totalPrice);
    return acc;
  }, {});
  
  return (
    <div className='w-auto bg-zinc-200 border-2 border-zinc-500 mx-3 rounded p-1 text-gray-700 font-semibold mt-3 flex'>
      <div className='mr-2'>TOPLAM TUTAR: </div>
      {orderTotalPrice && 
        <>
          <div className='flex'>{Object.keys(orderTotalPrice).filter((item) => item && item !== 'undefined').map((key, index) => {
            return (
                  <div key={index} className='mr-2'>
                    <div>{orderTotalPrice[key]} {key}</div>
                  </div>
            )
          })}</div>
        </>
      }
    </div>
    
  )
}

export default TotalFooter;