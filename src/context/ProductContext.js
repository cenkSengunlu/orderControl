import {createContext, useState} from 'react';

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [product, setProduct] = useState([]);
  

  const values = {product, setProduct};

  return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>;
};

export default ProductContext;