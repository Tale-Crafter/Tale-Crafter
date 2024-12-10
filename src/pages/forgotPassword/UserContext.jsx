import { createContext, useContext, useState } from 'react';
import useAuthToken from "../Dashboard/useAuthToken";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  const setUserEmail = (newEmail) => {
    setEmail(newEmail);
  };
  useAuthToken(); // Fetch and set the token when the provider is initialized

  return (
    <UserContext.Provider value={{ email, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
