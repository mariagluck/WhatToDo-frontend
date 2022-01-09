import React, { useContext, useState } from 'react';

export const UserContext = React.createContext();

export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
    return useContext(UserContext)
}