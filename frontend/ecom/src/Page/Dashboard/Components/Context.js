import React, { createContext, useState } from 'react';

// Create a context with default values
export const OpenContext = createContext();

// Create a provider component to wrap your app with
export const OpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <OpenContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenContext.Provider>
  );
};
