import React, { createContext, useState } from 'react';
// import {eventdata} from '???';

export const EventsContext = createContext();

const EventsContextProvider = ({children}) => {
  const [events] = useState(eventdata);

  return (
    <ProductsContext.Provider value={{ events }}>
      { children }
    </ProductsContext.Provider>
  );
}

export default EventsContextProvider;