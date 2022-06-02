import {createContext, useState} from 'react';

const ProductDesignContext = createContext();

export const ProductDesignProvider = ({children}) => {
    const [productDesignEvent, setProductDesignEvent] = useState([]);

  const values = {productDesignEvent, setProductDesignEvent};

  return <ProductDesignContext.Provider value={values}>{children}</ProductDesignContext.Provider>;
};

export default ProductDesignContext;