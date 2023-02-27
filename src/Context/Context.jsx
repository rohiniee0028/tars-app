import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) =>{

   const [searchData, setSearchData] = useState([]);

   const getSearchData = (data)=>{
      setSearchData(data);
   }

   return (
    <Context.Provider value={{searchData, getSearchData}}>
        {children}
    </Context.Provider>
   )
}