import {createContext, useState} from 'react';

const ProductDesignContext = createContext();

export const ProductDesignProvider = ({children}) => {
    const [productDesign, setProductDesign] = useState([]);
  

  const values = {productDesign, setProductDesign};

  return <ProductDesignContext.Provider value={values}>{children}</ProductDesignContext.Provider>;
};

export default ProductDesignContext;