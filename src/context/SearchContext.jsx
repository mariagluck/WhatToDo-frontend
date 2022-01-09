import React, { useContext, useState } from 'react';

export const SearchContext = React.createContext();

export const SearchContextProvider = ({children}) => {
  const [search, setSearch] = useState();

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      { children }
    </SearchContext.Provider>
  );
}



export const useSearchContext = () => {
    return useContext(SearchContext)
}