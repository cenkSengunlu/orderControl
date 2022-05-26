import {createContext, useState} from 'react';

const SelectContext = createContext();

export const SelectProvider = ({children}) => {
  const [select, setSelect] = useState({});
  

  const values = {select, setSelect};

  return <SelectContext.Provider value={values}>{children}</SelectContext.Provider>;
};

export default SelectContext;