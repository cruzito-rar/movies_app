import {createContext, useState} from 'react';
import {useFetch} from '../Hooks/useFetch';

export const Data = createContext();

export const DataProvider = ({children}) => {
 const [search, setSearch] = useState('Fullemtal Alchemist')
 const {isLoading, error, data} = useFetch(`&s=${search}`);

 return (
  <Data.Provider value={{setSearch, isLoading, error, data}}>
   {children}
  </Data.Provider>
 );
}