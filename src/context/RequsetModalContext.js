import React, { createContext, useState, useContext } from 'react';

const RequsetModalContext = createContext();

export const useRequsetModal = () => {
  return useContext(RequsetModalContext);
};

export const RequsetModalProvider = ({ children }) => {
  const [isRequsetModalOpen, setIsRequsetModalOpen] = useState(false);

  const openRequsetModal = () => {
    setIsRequsetModalOpen(true);
  };

  const closeRequsetModal = () => {
    setIsRequsetModalOpen(false);
  };

  return (
    <RequsetModalContext.Provider value={{ isRequsetModalOpen, openRequsetModal, closeRequsetModal }}>
      {children}
    </RequsetModalContext.Provider>
  );
};
