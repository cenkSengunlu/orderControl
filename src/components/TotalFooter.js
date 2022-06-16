import React, {useEffect} from 'react';

function TotalFooter({watchAllFields}) {

  const orderTotalPrice = watchAllFields.products && watchAllFields.products.reduce((acc, val) => {
    acc[val.pricing.currencyUnit.value] = (acc[val.pricing.currencyUnit] || 0) + parseInt(val.pricing.totalPrice);
    return acc;
  }, {});
  

  useEffect(() => {

  },[orderTotalPrice]);
  
  
  return (
    <>
      {orderTotalPrice && 
        <>
          <div className='w-full bg-zinc-300 border-2 border-zinc-500 mx-3 rounded p-1 text-gray-700 font-semibold mt-5 flex'>{Object.keys(orderTotalPrice).map((key, index) => {
            return (
              <div key={index}>
                <div>TOPLAM TUTAR: {orderTotalPrice[key]} {key}</div>
              </div>

            )
          })}</div>
        </>
      }
    </>
    
  )
}

export default TotalFooter;