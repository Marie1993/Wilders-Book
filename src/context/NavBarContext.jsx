import React, { useState, createContext } from 'react';

export const NavbarContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [isDeletable, setIsDeletable] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [isAddable, setIsAddable] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        isDeletable: isDeletable,
        setIsDeletable: setIsDeletable,
        isEditable: isEditable,
        setIsEditable: setIsEditable,
        isAddable: isAddable,
        setIsAddable: setIsAddable
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
export default ContextProvider;
