import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  const setUserEmail = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <UserContext.Provider value={{ email, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
