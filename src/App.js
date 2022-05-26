import React, {useState} from 'react';
import CustomerForm from './components/CustomerForm';
import ProductComponent from './components/ProductComponent';
import Form from './components/Form';
import {useForm} from 'react-hook-form';
// import Test2 from './components/Test2';
import {SelectProvider} from './context/SelectContext';
import {ProductDesignProvider} from './context/ProductDesignContext';


function App() {
  const [product, setProduct] = useState([]);
  const [ct, setCt] = useState(1);
  const methods = useForm();

  const handleClick = () => {
    setProduct(product => [...product, {id: ct}])
    setCt(ct + 1);
  }

  return (
    <div className="App">
      
      <br />
      <SelectProvider>
        <ProductDesignProvider>
          <CustomerForm />
          <button className='bg-blue-500 text-white rounded p-2 my-3' onClick={() => handleClick()}>Ürün Ekle</button>
          <Form
            methods={methods}
            onSubmit={(values) => { 
              console.log(values);
            }}
            >
            <button className='bg-blue-500 text-white rounded p-2 my-3' type='submit'>Yazdır</button>
          
            {product.map((item,index) => {
              return(
                <div key={index}>
                  <ProductComponent index={item.id} />
                </div> 
              )
            })}
            {/* <Test2/> */}

          
          </Form>
        </ProductDesignProvider>
      </SelectProvider>
      
    </div>
  );
}

export default App;
